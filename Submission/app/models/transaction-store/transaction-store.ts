import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { TransactionModel, TransactionSnapshot, Transaction } from "../transaction/transaction"
import { withEnvironment } from '../extensions/with-environment'
import { GetTransactionsResult } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const TransactionStoreModel = types
  .model("TransactionStore")
  .props({
    transactions: types.optional(types.array(TransactionModel), []),
  })
  .extend(withEnvironment)
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({ // Save our transactions to local state tree
    saveTransactions: (transactionSnapshots: TransactionSnapshot[]) => {
      const transactionsModels: Transaction[] = transactionSnapshots.map(c => TransactionModel.create(c)) // create model instances from the plain objects
      self.transactions.replace(transactionsModels) // Replace the existing data with the new data
    },
  }))
  .actions(self => ({
    // Get our transactions from API and save to models
    getTransactions: flow(function * () {
      const result: GetTransactionsResult = yield self.environment.api.getTransactions()

      if (result.kind === "ok") {
        self.saveTransactions(result.transactions)
      } else {
        __DEV__ && console.log(result.kind)
      }
    }),
    
    // Save the transaction
    saveTransaction: flow(function * (amount: string) {
      const tx = {
        amount: amount,
        currency: 'Bø',
        counterparty: 'Bó',
        category: 'Gifts'
      }

      const result: SaveTransactionResult = yield self.environment.api.saveTransaction(tx)

      if (result.kind === "ok") {
        return amount
      } else {
        __DEV__ && console.log(result.kind)
      }
    })
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type TransactionStoreType = Instance<typeof TransactionStoreModel>
export interface TransactionStore extends TransactionStoreType {}
type TransactionStoreSnapshotType = SnapshotOut<typeof TransactionStoreModel>
export interface TransactionStoreSnapshot extends TransactionStoreSnapshotType {}
