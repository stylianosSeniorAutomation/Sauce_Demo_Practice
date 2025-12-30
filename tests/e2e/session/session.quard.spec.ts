import { test, expect } from '@playwright/test';
import { ROUTES } from '../../../src/data/routes';
import { logger } from '../../../utils/logger';

test.describe('Session Test - auth Test', () => {
  test.beforeAll(async ({ page }) => {
    //navigate to url before each test
    logger.info('Before Each test URL WILL RUN');
    await page.goto('/');

    test.skip(' Hypbrid Session Test  - TC01 - User should not redirect without log in', async ({
      page,
    }) => {
      //sauceDemo does not implement proper auth quard
      await page.goto(ROUTES.INVENTORY);
      expect(page).toHaveURL(ROUTES.INVENTORY);
      //expected behavior : user should not acess inventory  content without log in
      //errors expected : 403 , 401
      //behavior expected : redirect to log in page
      //actual behavior : no errors
    });
  });
});
