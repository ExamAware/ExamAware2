import { expect, test } from '@playwright/test';

test('loads production TDesign styles through Caddy history fallback', async ({ page }) => {
  const failures: string[] = [];
  const cssResponses: Array<{ url: string; status: number; contentType: string }> = [];
  const expectedOrigin = new URL(process.env.CONTROL_CONSOLE_BASE_URL || 'http://127.0.0.1:18080')
    .origin;

  page.on('pageerror', (error) => failures.push(`page error: ${error.message}`));
  page.on('requestfailed', (request) => {
    failures.push(
      `request failed: ${request.url()} (${request.failure()?.errorText || 'unknown'})`
    );
  });
  page.on('response', (response) => {
    const url = new URL(response.url());
    if (url.origin !== expectedOrigin) return;
    if (url.pathname.endsWith('.css')) {
      cssResponses.push({
        url: response.url(),
        status: response.status(),
        contentType: response.headers()['content-type'] || ''
      });
    } else if (response.status() >= 400 && url.pathname !== '/api/auth/get-session') {
      failures.push(`asset/page HTTP ${response.status()}: ${response.url()}`);
    }
  });

  await page.route('**/api/auth/get-session', async (route) => {
    await route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: '{"error":"unauthorized"}'
    });
  });

  const response = await page.goto('/login');
  expect(response?.status()).toBe(200);
  expect(response?.headers()['content-type']).toContain('text/html');
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole('heading', { name: '登录集控中心' })).toBeVisible();
  await page.waitForLoadState('networkidle');

  expect(cssResponses.length).toBeGreaterThan(0);
  for (const css of cssResponses) {
    expect(css.status, css.url).toBe(200);
    expect(css.contentType, css.url).toContain('text/css');
  }

  const tokens = await page.evaluate(() => {
    const style = getComputedStyle(document.documentElement);
    return {
      brand: style.getPropertyValue('--td-brand-color').trim(),
      size: style.getPropertyValue('--td-comp-size-m').trim()
    };
  });
  expect(tokens).toEqual({ brand: '#0052d9', size: '32px' });

  const button = page.getByRole('button', { name: '登录' });
  await expect(button).toBeVisible();
  const buttonStyle = await button.evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      height: style.height,
      backgroundColor: style.backgroundColor,
      borderColor: style.borderColor,
      color: style.color
    };
  });
  expect(buttonStyle).toEqual({
    height: '32px',
    backgroundColor: 'rgb(0, 82, 217)',
    borderColor: 'rgb(0, 82, 217)',
    color: 'rgb(255, 255, 255)'
  });
  expect(failures).toEqual([]);
});
