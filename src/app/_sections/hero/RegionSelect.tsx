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

const getRegions = async (): Promise<RegionsResponse> => {
  const response = await fetch(`http://localhost:3000/api/regions/`, {
    method: 'GET',
  });
  return response.json();
};

const RegionSelect = async () => {
  const { regions } = await getRegions();

  return (
    <div>
      <Label className="px-3 text-xs font-semibold text-muted-foreground">
        Region
      </Label>
      <Select>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select a region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Regions</SelectLabel>
            {regions.map(({ label, value }) => (
              <SelectItem value={label}>{value}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RegionSelect;
