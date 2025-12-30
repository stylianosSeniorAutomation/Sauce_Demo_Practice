import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';
import { getUserByRole } from '../../../src/helpers/helper-users';
import { ROUTES } from '../../../src/data/routes';
import { InventoryPage } from '../../../src/pages/InventoryPage';
import { logger } from '../../../utils/logger';
import { PRODUCTS } from '../../../src/data/products';

test.describe('Full Coverage Shopping Cart - Add to Cart', () => {
  const userStandard = getUserByRole('standard');

   test.beforeEach(async ({ page }) => {  // Changed from beforeAll to beforeEach
    logger.info('Before each test URL will run');
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.loggedIN(userStandard.username, userStandard.password);
    await expect(page).toHaveURL(ROUTES.INVENTORY);
    logger.success(`Log in Done - User navigated to - ${ROUTES.INVENTORY}`);
  });

  test('Smoke - AddToCart-01- Add single product to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');
    await expect(inventoryPage.cartIcon).toHaveText('1');
    logger.success('Product added to cart - Cart icon updated correctly');

    await inventoryPage.getCartIconClicked();
    await expect(page).toHaveURL(ROUTES.CART);
    logger.success(`User navigated to - ${ROUTES.CART}`);
  });

  test('Smoke - AddToCart-02- Add multiple products to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.addProductToCart('Sauce Labs Bolt T-Shirt');
    await expect(inventoryPage.cartIcon).toHaveText('2');
    logger.success('Products added to cart - Cart icon   updated correctly');

    await inventoryPage.getCartIconClicked();
    await expect(page).toHaveURL(ROUTES.CART);
    logger.success(`User navigated to - ${ROUTES.CART}`);
  });

  test('Smoke - AddToCart-03- Add all products to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    for (const p of PRODUCTS) {
      await inventoryPage.addProductToCart(p);
    }
    await expect(inventoryPage.cartIcon).toHaveText(String(PRODUCTS.length));
    logger.success('All Products added to cart - Cart icon updated correctly');

    await inventoryPage.getCartIconClicked();
    await expect(page).toHaveURL(ROUTES.CART);
    logger.success(`User navigated to - ${ROUTES.CART}`);
  });
});
