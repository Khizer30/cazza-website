import { test, expect } from "@playwright/test";

test("Dashboard Test", async ({ page }) => {
  await page.goto("https://app.cazza.stackpk.com/dashboard");
  await page.getByRole("button").nth(3).click();
  await page.getByRole("textbox", { name: "Ask Cazza a question..." }).click();
  await page.getByRole("textbox", { name: "Ask Cazza a question..." }).fill("Hello");
  await page.getByRole("textbox", { name: "Ask Cazza a question..." }).press("Enter");
  await expect(page).toHaveURL("https://app.cazza.stackpk.com/ask-cazza");
});
