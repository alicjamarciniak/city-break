'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { NumberInput, DatePicker } from '@/components';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { PropsWithChildren } from 'react';
import { AvatarIcon } from '@radix-ui/react-icons';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { showWIPToast } from '@/utils/sonner/toast';

const SearchBar = ({ children }: PropsWithChildren) => {
  const t = useTranslations('HomePage');
  const { isMdDevice: isMobile } = useMediaQueries();

  if (isMobile === null) return;

  return isMobile ? (
    <div className="mt-5 flex justify-center">
      <Button
        variant="secondary"
        className="text-black rounded-full py-5 px-20 drop-shadow-md"
        onClick={showWIPToast}
      >
        <MagnifyingGlassIcon height={18} width={18} className="mr-2" />{' '}
        {t('hero.search')}
      </Button>
    </div>
  ) : (
    <Card className="w-auto rounded-none mt-20 gap-4 bg-white flex p-1 self-center flex-row">
      {children}
      <Separator className="h-[1px] lg:h-auto my-1" orientation="vertical" />
      <div className="flex flex-row lg:flex-col relative">
        <Label className="text-xs font-semibold text-muted-foreground flex items-center h-4">
          <AvatarIcon
            height={18}
            width={18}
            className="font-bold text-black left-3 absolute lg:hidden"
          />
          <span className="hidden lg:inline">
            {t('hero.participantsLabel')}
          </span>
        </Label>
        <div className="h-12 flex items-center justify-center">
          <NumberInput />
        </div>
      </div>
      <Separator className="h-[1px] lg:h-auto my-1" orientation="vertical" />
      <div>
        <Label className="px-3 text-xs font-semibold text-muted-foreground hidden lg:block h-4">
          {t('hero.dateLabel')}
        </Label>
        <div className="h-12 flex items-center">
          <DatePicker />
        </div>
      </div>
      <Separator className="m-1" orientation="vertical" />
      <div className="flex self-center flex-grow justify-end items-end ">
        <Button
          className="flex-1 lg:mr-3"
          variant="default"
          onClick={showWIPToast}
        >
          {t('hero.search')}
        </Button>
      </div>
    </Card>
  );
};

export default SearchBar;
