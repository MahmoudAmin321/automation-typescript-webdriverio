export class Payment {
  /**page objects */

  // -----------------------------------------------------------------------------------------------

  /**methods */
  async getSelectedOptionForSpecificDDL(
    controlnameOfDDL: string
  ): Promise<WebdriverIO.Element> {
    return await $(`[controlname='${controlnameOfDDL}'] button`);
  }

  async clickStateDDL(): Promise<void> {
    await (await this.getSelectedOptionForSpecificDDL(`state`)).click();
  }

  async getElasticSearchInputFieldForSpecificDDL(
    controlnameOfDDL: string
  ): Promise<WebdriverIO.Element> {
    return await $(
      `[controlname='${controlnameOfDDL}'] app-dropdown-menu input[type='text']`
    );
  }

  async getElasticSearchInputFieldForStateDDL(): Promise<WebdriverIO.Element> {
    return await this.getElasticSearchInputFieldForSpecificDDL(`state`);
  }

  async WaitSpecificDDLToBeDisplayed(controlnameOfDDL: string): Promise<void> {
    await (
      await this.getSelectedOptionForSpecificDDL(`${controlnameOfDDL}`)
    ).waitForDisplayed();
  }

  async WaitStateDDLToBeDisplayed(): Promise<void> {
    await this.WaitSpecificDDLToBeDisplayed(`state`);
  }
}

export default new Payment();
