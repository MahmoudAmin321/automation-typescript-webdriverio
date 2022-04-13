export class Account {
  /**page objects */
  get firstName() {
    return $(`[controlname='first_name'] input`);
  }
  get lastName() {
    return $(`[controlname='last_name'] input`);
  }
  get email() {
    return $(`[controlname='email'] input`);
  }
  get phone() {
    return $(`[controlname='phone'] input`);
  }
  get password() {
    return $(`[controlname='password'] input`);
  }
  get confirmPassword() {
    return $(`[controlname='confirm_password'] input`);
  }
  get company() {
    return $(`[controlname='business_name'] input`);
  }
  get changePlan() {
    return $(`.plans-expander`);
  }
  get plans() {
    return $$(`.plan`);
  }
  get currentPlan() {
    return $(`.plan-current`);
  }
  get termsAndConditions_CB() {
    return $(
      `//input[@controlname='terms_and_conditions']/following-sibling::i`
    );
  }

  // -----------------------------------------------------------------------------------------------

  /**methods */
  async clickChangePlan(): Promise<void> {
    await this.changePlan.click();
  }

  async WaitCurrentPlanToBeDisplayed(): Promise<void> {
    await this.currentPlan.waitForDisplayed();
  }

  async WaitSpecificPlanToBeDisplayed(planIndex: number): Promise<void> {
    await this.plans[planIndex].waitForDisplayed();
  }

  async WaitStandardPlanToBeDisplayed(): Promise<void> {
    await this.WaitSpecificPlanToBeDisplayed(2);
  }

  async clickSpecificPlan(planIndex: number): Promise<void> {
    await this.plans[planIndex].click();
  }

  async clickStandardPlan(): Promise<void> {
    await this.clickSpecificPlan(2);
  }

  async clickTermsAndConditionsCheckbox(): Promise<void> {
    await this.termsAndConditions_CB.click();
  }
}

export default new Account();
