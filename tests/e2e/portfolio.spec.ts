import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage renders with its primary navigation destinations", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /Shiva Kumar Reddy Gaddam/i }),
  ).toBeVisible();

  for (const destination of ["about", "work", "experience", "skills", "projects", "contact"]) {
    await expect(page.locator(`#${destination}`)).toHaveCount(1);
    await expect(page.locator(`nav a[href="/#${destination}"]`).first()).toBeAttached();
  }
});

test("work dialog traps focus, closes with Escape, and restores its opener", async ({ page }) => {
  await page.goto("/#work");

  const opener = page.getByRole("button", { name: /CASE 1/i });
  await opener.click();

  const dialog = page.getByRole("dialog", { name: /Release Automation/i });
  const closeButton = dialog.getByRole("button", { name: "Close case study" });
  await expect(dialog).toBeVisible();
  await expect(page.locator("main")).toHaveAttribute("inert", "");

  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(closeButton).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(opener).toBeFocused();
});

test("mobile layout has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("homepage has no critical Axe violations", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();
  const criticalViolations = results.violations.filter(
    (violation) => violation.impact === "critical",
  );

  expect(criticalViolations).toEqual([]);
});
