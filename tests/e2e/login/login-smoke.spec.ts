//in this file not negative scenarios will be included - could be included only after discussions with PDO
//in summary what how bussiness expected to be work

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';
import { getUserByRole } from '../../../src/helpers/helper-users';
import { ERRORMESSAGES } from '../../../src/data/error-messages';
import { ROUTES } from '../../../src/data/routes';
import { logger } from '../../../utils/logger';

test.describe('Full Log in Coverage - Smoke Test', () => {
  //expected different test and validation for both users , creating two different variables - NO LOOP
  const userStandard = getUserByRole('standard');
  const userLocked = getUserByRole('locked');

  test.beforeEach(async ({ page }) => {
    //navigate to url before each test
    logger.info('Before Each test URL WILL RUN');
    await page.goto('/');
  });

  test('Smoke-Login-01-Valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loggedIN(userStandard.username, userStandard.password);
    await expect(page).toHaveURL(ROUTES.INVENTORY);
    logger.success(`Log in Done - User navigated to - ${ROUTES.INVENTORY}`);

  });
  test('Smoke-Login-02- Locked user is blocked', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loggedIN(userLocked.username, userLocked.password);
    await expect(loginPage.getError()).toContainText(ERRORMESSAGES.lockedError);
    await expect(page).toHaveURL(ROUTES.NO_REDIRECT);
    logger.success('Locked User expeted to be blocked for log in');
  });
});
