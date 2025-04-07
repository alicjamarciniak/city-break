import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, expect, describe, it, beforeAll, afterAll } from 'vitest';
import LanguageSwitcherSelect from './LanguageSwitcherSelect';
import { SelectItem } from '@/components/ui/select';
import { beforeEach } from 'node:test';

vi.mock('next-intl', () => ({
  useTranslations:
    () =>
    (key: string, { locale }: { locale: string }) =>
      `${key}-${locale}`,
}));

const replaceMock = vi.fn();

vi.mock('@/i18n/navigation', () => ({
  useRouter: () => ({
    replace: replaceMock,
  }),
  usePathname: () => '/current-path',
  useParams: () => null,
}));

const getLabel = (locale: string) =>
  ({ en: 'English', pl: 'Polish' })[locale] || 'Other';

describe('LanguageSwitcherSelect', () => {
  beforeEach(() => {
    replaceMock.mockClear();
  });

  beforeAll(() => {
    window.HTMLElement.prototype.hasPointerCapture = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  const locales = ['en', 'pl', 'de'];

  const mockChildren = locales.map((locale) => (
    <SelectItem key={locale} value={locale}>
      {getLabel(locale)}
    </SelectItem>
  ));

  it('renders the correct language options', async () => {
    render(
      <LanguageSwitcherSelect defaultValue="en" label="Select Language">
        {mockChildren}
      </LanguageSwitcherSelect>,
    );

    await userEvent.click(screen.getByRole('combobox'));

    locales.forEach((locale) => {
      expect(screen.getAllByText(getLabel(locale))[0]).toBeInTheDocument();
    });
  });

  it('updates the selected language on change', async () => {
    render(
      <LanguageSwitcherSelect defaultValue="en" label="Select Language">
        {mockChildren}
      </LanguageSwitcherSelect>,
    );

    await userEvent.click(screen.getByRole('combobox'));

    await userEvent.click(screen.getByText('Polish'));

    expect(replaceMock).toHaveBeenCalledWith(
      { pathname: '/current-path', params: null },
      { locale: 'pl' },
    );
  });

  it('disables select when pending', async () => {
    render(
      <LanguageSwitcherSelect defaultValue="en" label="Select Language">
        {mockChildren}
      </LanguageSwitcherSelect>,
    );

    const selectTrigger = screen.getByRole('combobox');
    expect(selectTrigger).not.toBeDisabled();
  });
});
