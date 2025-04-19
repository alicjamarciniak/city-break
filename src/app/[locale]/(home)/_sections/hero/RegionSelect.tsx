import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { type RegionsResponse } from '@/app/api/regions/types.d';
import { useTranslations } from 'next-intl';

const getRegions = async (): Promise<RegionsResponse> => {
  const response = await fetch(`${process.env.API_BASE_URL}/api/regions/`, {
    method: 'GET',
  });
  return response.json();
};

const RegionSelect = async () => {
  const t = useTranslations('HomePage');
  const { regions } = await getRegions();

  return (
    <div className="flex flex-col">
      <Label className="px-3 text-xs font-semibold text-muted-foreground h-4">
        {t('hero.region')}
      </Label>
      <div className="h-12 flex items-center">
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder={t('hero.regionPlaceholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t('hero.regionSelectLabel')}</SelectLabel>
              {regions.map(({ label, value }) => (
                <SelectItem key={label} value={label}>
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default RegionSelect;
