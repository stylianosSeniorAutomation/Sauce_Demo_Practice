import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';
import { getUserByRole } from '../../../src/helpers/helper-users';
import { ROUTES } from '../../../src/data/routes';
import { InventoryPage } from '../../../src/pages/InventoryPage';
import { logger } from '../../../utils/logger';

test.describe('Shopping Cart - Remove from Cart', () => {
  const userStandard = getUserByRole('standard');

 test.beforeEach(async ({ page }) => {  // Changed from beforeAll to beforeEach
    logger.info('Before each test URL will run');
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(userStandard.username, userStandard.password);
    await expect(page).toHaveURL(ROUTES.INVENTORY);
    logger.success(`Log in Done - User navigated to - ${ROUTES.INVENTORY}`);
  });

  test('Smoke - RemoveCart-01- Add single product to cart', async ({ page }) => {
    const invetnoryPage = new InventoryPage(page);
    await invetnoryPage.addProductToCart('Sauce Labs Bike Light');
    await invetnoryPage.addProductToCart('Sauce Labs Bolt T-Shirt');
    expect(invetnoryPage.cartIcon).toHaveText('2');
    logger.success('Product added to cart - Cart icon updated correctly');

    await invetnoryPage.removeProductToCart('Sauce Labs Bike Light');
    expect(invetnoryPage.cartIcon).toHaveText('1');
    logger.success('Product removed from cart - Cart icon updated correctly');

    await invetnoryPage.getCartIconClicked();
    expect(page).toHaveURL(ROUTES.CART);
    logger.success(`User navigated to - ${ROUTES.CART}`);
  });
});
