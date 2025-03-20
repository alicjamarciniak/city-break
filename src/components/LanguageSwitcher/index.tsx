import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import LanguageSwitcherSelect from './LanguageSwitcherSelect';
import { SelectItem } from '@/components/ui/select';

const LanguageSwitcher = () => {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();

  return (
    <LanguageSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </SelectItem>
      ))}
    </LanguageSwitcherSelect>
  );
};

export default LanguageSwitcher;
