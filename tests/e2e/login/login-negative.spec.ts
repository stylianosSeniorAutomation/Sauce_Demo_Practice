//negative scenarios for log in comp - only after discussions with PDO can inlcuded to smoke test

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/LoginPage";
import { getUserByRole } from "../../../src/helpers/helper-users";
import { ERRORMESSAGES } from "../../../src/data/error-messages";
import { logger } from "../../../utils/logger";

test.describe("Full Log in Coverage - Negative Test", () => {
  //expected different test and validation for both users , creating two different variables - NO LOOP
  const userStandard = getUserByRole("standard");

  test.beforeAll(async ({ page }) => {
    //navigate to url before each test
    logger.info("Before Each test URL WILL RUN");
    await page.goto("/");

    test("Negative-Login-01- Empty username shows ERROR", async ({ page }) => {
      const login = new LoginPage(page);
      await login.login("", userStandard.password);
      await expect(page).toHaveURL(/inventory.html/i);
      await expect(login.getError()).toContainText(
        ERRORMESSAGES.emptyUsernameError
      );
      expect(page).toHaveURL(/\/$/);
      logger.error(
        `${ERRORMESSAGES.emptyUsernameError} - (make sure you fill the username)`
      );
    });
    //separating password and username error scenario as errors are displayed different - both need to be covered
    test("Negative-Login-02- Empty password shows ERROR", async ({ page }) => {
      const login = new LoginPage(page);
      await login.login(userStandard.username, "");
      await expect(page).toHaveURL(/inventory.html/i);
      await expect(login.getError()).toContainText(
        ERRORMESSAGES.emptyUsernameError
      );
      expect(page).toHaveURL(/\/$/);
      logger.error(
        `${ERRORMESSAGES.emptyPasswordError} - (make sure you fill the password)`
      );
    });
    test("Negative-Login-03- Invalid username and password shows ERROR", async ({
      page,
    }) => {
      const login = new LoginPage(page);
      login.login("invalidusername", "1234");
      await expect(page).toHaveURL(/inventory.html/i);
      await expect(login.getError()).toContainText(
        ERRORMESSAGES.invalidCredentials
      );
      expect(page).toHaveURL(/\/$/);
      logger.error(
        `${ERRORMESSAGES.invalidCredentials} - (make sure you fill correct the credentials)`
      );
    });
  });
});
