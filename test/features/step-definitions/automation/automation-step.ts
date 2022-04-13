import { Given, When, DataTable } from "@cucumber/cucumber";
import { Helper } from "../../../helper/helper";
import Account from "../../../page-objects/automation/account";
import Footer from "../../../page-objects/automation/footer";
import Payment from "../../../page-objects/automation/payment";

let Helper_obj: Helper;
//Footer: Footer;

let randomValue: string;
let reusableData: Object[];

Given(/^target page is open$/, async () => {
  await browser.url(`registration?plan=5370&store=6&address=1004`);
});

When(/^user fills account data$/, async (dataTable: DataTable) => {
  Helper_obj = new Helper();
  reusableData = dataTable.hashes();
  randomValue = Helper_obj.randomString(5, `alphabetic`);
  await Account.WaitCurrentPlanToBeDisplayed();
  await browser.pause(300);
  await Account.firstName.setValue(randomValue);
  randomValue = Helper_obj.randomString(9, `alphabetic`);
  await Account.lastName.setValue(randomValue);
  randomValue = Helper_obj.randomString(13, `numeric`);
  await Account.phone.setValue(randomValue);
  //@ts-ignore
  await Account.email.setValue(reusableData[0].Email);
  //@ts-ignore
  await Account.password.setValue(reusableData[0].Password);
  //@ts-ignore
  await Account.confirmPassword.setValue(reusableData[0].Password);
  await Account.company.setValue(`Automation`);
  await Account.clickChangePlan();
  await Account.WaitStandardPlanToBeDisplayed();
  await browser.pause(300);
  await Account.clickStandardPlan();
  await Account.clickTermsAndConditionsCheckbox();
  await Footer.waitSubmitButtonToBeClickable();
  await browser.pause(300);
});

When(/^user proceeds$/, async () => {
  await Footer.clickSubmitButton();
  await browser.pause(300);
});

When(/^user fills payment data i.e. (.*)$/, async (state: string) => {
  await Payment.WaitStateDDLToBeDisplayed();
  await browser.pause(300);
  await Payment.clickStateDDL();
  await (await Payment.getElasticSearchInputFieldForStateDDL()).setValue(state);
  await browser.keys(`Enter`);
  await browser.pause(300);
});
