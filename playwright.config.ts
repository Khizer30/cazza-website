import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  tsconfig: "./tsconfig.json",

  use: {
    // baseURL: process.env.FRONTEND_URL,
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  projects: [
    {
      name: "setup",
      testMatch: /login\.ts/
    },
    {
      name: "Chromium",
      use: { ...devices["Desktop Chrome"], storageState: "playwright/user.json" },
      dependencies: ["setup"]
    }
    // {
    //   name: "Mobile Chrome",
    //   use: { ...devices["Pixel 5"], storageState: "playwright/user.json" },
    //   dependencies: ["setup"]
    // }
  ],

  webServer: {
    command: "pnpm start",
    // url: process.env.FRONTEND_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 70000
  }
});
