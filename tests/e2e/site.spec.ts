import { test, expect } from "@playwright/test";
test("páginas e contato", async ({ page }) => {
  for (const path of [
    "/",
    "/servicos/",
    "/sobre/",
    "/galeria/",
    "/orcamento/",
    "/contato/",
  ]) {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.title()).toContain("Ateliê Nice");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await expect(
    page.getByRole("link", { name: "Abrir WhatsApp", exact: true }),
  ).toHaveAttribute("href", "https://wa.me/5511996227091");
  await expect(
    page.locator('a[href="tel:+5511996227091"]').first(),
  ).toBeVisible();
});
test("acabamento visual e carregamento das imagens", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await expect(page.locator(".hero-visual img")).toBeVisible();
  await expect
    .poll(() =>
      page
        .locator(".hero-visual img")
        .evaluate(
          (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
        ),
    )
    .toBe(true);
  await page.screenshot({
    path: `artifacts/${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page.screenshot({path:`artifacts/${testInfo.project.name}-inicio.png`});
});
test("página inexistente retorna 404", async ({ page }) => {
  const response = await page.goto("/pagina-inexistente/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "fio da conversa",
  );
});
test("navegação responsiva", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Serviços", exact: true })
    .click();
  await expect(page).toHaveURL(/servicos/);
});
test("validação e abertura de orçamento sem envio", async ({ page }) => {
  await page.goto("/orcamento/");
  await page.getByRole("button", { name: "Enviar pelo WhatsApp" }).click();
  await expect(page.locator("#name-error")).toBeVisible();
  await page.locator("#name").fill("Ana");
  await page.locator("#quantity").fill("2");
  await page.locator("#service").selectOption({ label: "Ajustes e reformas" });
  await page
    .locator("#description")
    .fill("Preciso ajustar a barra de duas calças.");
  await page.evaluate(() => {
    window.open = (url) => {
      (window as Window & { testUrl?: string }).testUrl = String(url);
      return null;
    };
  });
  await page.getByRole("button", { name: "Enviar pelo WhatsApp" }).click();
  const url = await page.evaluate(
    () => (window as Window & { testUrl?: string }).testUrl,
  );
  expect(new URL(url!).searchParams.get("text")).toContain(
    "Quantidade aproximada: 2",
  );
});
test("galeria acessível pelo teclado", async ({ page }) => {
  await page.goto("/galeria/");
  await page
    .getByRole("button", { name: /Ampliar:/ })
    .first()
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("dialog")).toContainText("2/4");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
});
