import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginContainer: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginContainer = page.locator('#login_button_container');
    this.usernameInput = this.loginContainer.locator('[data-test=username]');
    this.passwordInput = this.loginContainer.locator('[data-test=password]');
    this.loginButton = this.loginContainer.locator('[data-test=login-button]');
    this.errorMessage = this.loginContainer.locator('[data-test=error]');
  }

  async loggedIN(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  getError() {
    return this.errorMessage;
  }
}
