import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.goto("https://app.cazza.stackpk.com/login");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("syed.khizer30@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("Shaheer30=");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL("https://app.cazza.stackpk.com/dashboard");
  await page.context().storageState({ path: "playwright/user.json" });
});
