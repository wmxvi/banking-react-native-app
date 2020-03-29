// Test Transaction List

describe("Test Transaction List", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should have transaction list", async () => {
    await expect(element(by.id("TransactionList"))).toBeVisible()
  })

  it("should go to next screen after tap", async () => {
    await element(by.id("next-screen-button")).tap()
    await expect(element(by.id("DemoScreen"))).toBeVisible()
  })
})
