export class Footer {
  /**page objects */
  cssSubmitButton = `button[type='submit']`;
  get submitButton() {
    return $(`${this.cssSubmitButton}`);
  }

  // -----------------------------------------------------------------------------------------------

  /**methods */
  async waitSubmitButtonToBeDisplayed(): Promise<void> {
    await this.submitButton.waitForDisplayed();
  }

  async waitSubmitButtonToBeClickable(): Promise<void> {
    await this.submitButton.waitForClickable();
  }

  async clickSubmitButton(): Promise<void> {
    await browser.execute((cssForElement: string) => {
      let ele: HTMLElement = document.querySelector(
        cssForElement
      ) as HTMLElement;
      ele.click();
    }, this.cssSubmitButton);
  }
}

export default new Footer();
