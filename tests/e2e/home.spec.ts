import { test, expect } from '@playwright/test';

// Ajuste o título esperado conforme o <title> em index.html
// Atual: "Caixa Criativa | Automação e Presença Digital para Pequenas Empresas"
const expectedTitle = /Caixa Criativa/i;

test('abre a home e valida título', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(expectedTitle);
});

// Exemplo de CTA principal (ajuste o role/nome conforme o componente real)
// Dica: use getByRole com nome acessível estável
// test('CTA principal visível e clicável', async ({ page }) => {
//   await page.goto('/');
//   const cta = page.getByRole('button', { name: /fale com nosso assistente|quero saber mais|começar/i });
//   await expect(cta).toBeVisible();
//   await cta.click();
//   // Adapte a asserção ao comportamento após o clique
// });
