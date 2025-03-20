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

const SearchBar = ({ children }: PropsWithChildren) => {
  const t = useTranslations('HomePage');
  const { isMdDevice } = useMediaQueries();
  const isMobile = isMdDevice();

  return isMobile ? (
    <div className="mt-5 flex justify-center">
      <Button
        variant="secondary"
        className="text-black rounded-full py-5 px-20 drop-shadow-md"
      >
        <MagnifyingGlassIcon height={18} width={18} className="mr-2" />{' '}
        {t('hero.search')}
      </Button>
    </div>
  ) : (
    <Card className="w-auto rounded-none mt-20 gap-4 bg-white flex p-1 self-center flex-row">
      {children}
      <Separator className="h-[1px] lg:h-auto my-1" orientation="vertical" />
      <div className="flex flex-row lg:flex-col relative justify-center">
        <Label className="text-xs font-semibold text-muted-foreground flex items-center">
          {isMobile ? (
            <AvatarIcon
              height={18}
              width={18}
              className="font-bold text-black left-3 absolute"
            />
          ) : (
            t('hero.participantsLabel')
          )}
        </Label>
        <NumberInput />
      </div>
      <Separator className="m-1" orientation="vertical" />
      <div>
        <Label className="px-3 text-xs font-semibold text-muted-foreground hidden lg:block">
          {t('hero.dateLabel')}
        </Label>
        <DatePicker />
      </div>
      <Separator className="m-1" orientation="vertical" />
      <div className="flex self-center flex-grow justify-end items-end ">
        <Button className="flex-1 lg:mr-3" variant="default">
          {t('hero.search')}
        </Button>
      </div>
    </Card>
  );
};

export default SearchBar;
