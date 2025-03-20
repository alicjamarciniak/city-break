'use client';

import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { ReactNode, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type LanguageSwitcherSelectProps = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const LanguageSwitcherSelect = ({
  children,
  defaultValue,
  label,
}: LanguageSwitcherSelectProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: Locale) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select
      onValueChange={onSelectChange}
      defaultValue={defaultValue}
      disabled={isPending}
    >
      <SelectTrigger className="min-w-[90px]">
        <SelectValue defaultValue={defaultValue} />
      </SelectTrigger>
      <SelectContent className="z-[9999]">
        <SelectGroup>
          <SelectLabel className="sr-only">{label}</SelectLabel>
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcherSelect;
