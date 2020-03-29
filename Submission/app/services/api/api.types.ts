import { GeneralApiProblem } from "./api-problem"

export interface Transaction {
  id: number
  currency: string,
  amount: string,
  counterparty: string,
  category: string,
}

export type GetTransactionsResult = { kind: "ok"; transactions: Transaction[] } | GeneralApiProblem
export type SaveTransactionResult = { kind: "ok"; } | GeneralApiProblem
