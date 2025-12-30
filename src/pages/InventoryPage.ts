import { Page, Locator } from '@playwright/test';
import type { ProductName } from '../data/products';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  getAddToCartButtonByProductName(productName: ProductName): Locator {
    return this.inventoryItems
      .filter({ hasText: productName })
      .locator('button', { hasText: 'Add to cart' });
  }
  async addProductToCart(productName: ProductName): Promise<void> {
    await this.getAddToCartButtonByProductName(productName).click();
  }

  getRemoveButtonByProductName(productName: ProductName): Locator {
    return this.inventoryItems
      .filter({ hasText: productName })
      .locator('button', { hasText: 'Remove' });
  }

  async removeProductToCart(productName: ProductName): Promise<void> {
    await this.getRemoveButtonByProductName(productName).click();
  }

  async getCartIconClicked() {
    await this.cartIcon.click();
  }
}
