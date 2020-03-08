import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { Transaction } from "../../models/transaction"

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  /**
   * Gets a list of transactions.
   */
  async getTransactions(): Promise<Types.GetTransactionsResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/transactions`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    const convertTransaction = (raw) => {
      return {
        id: String(raw.id),
        currency: raw.currency,
        amount: raw.amount,
        counterparty: raw.counterparty,
        category: raw.category,
      }
    }

    // transform the data into the format we are expecting
    try {
      const rawTransactions = response.data
      const resultTransactions: Types.Transaction[] = rawTransactions.data.map(convertTransaction)
      return { kind: "ok", transactions: resultTransactions }
    } catch {
      return { kind: "bad-data" }
    }
  }

  async saveTransaction(tx: object): Promise<Types.SaveTransactionResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.post(`/transactions`, tx)
    // console.log('savetx', tx, response.data.errors);
    // the typical ways to die when calling an api
    if (!response.ok || response.data.errors) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    return { kind: "ok" }
  }
}
