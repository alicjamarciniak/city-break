'use client';

import dynamic from 'next/dynamic';
import { HomeIcon, SewingPinIcon } from '@radix-ui/react-icons';

const LazyMap = dynamic(() => import('@/utils/leaflet/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type AddressSectionProps = {
  address: string;
  facilityName?: string;
};

const AddressSection = ({ address, facilityName }: AddressSectionProps) => {
  return (
    <div className="mt-10">
      <h3 className="t-h3">Where do we meet?</h3>
      <div className="mt-6 flex flex-col gap-3">
        <p>
          <HomeIcon
            height={20}
            width={20}
            className="text-special inline-block mr-3"
          />
          {facilityName}
        </p>
        <p className="">
          <SewingPinIcon
            height={20}
            width={20}
            className="text-special inline-block mr-3"
          />
          {address}
        </p>
      </div>
      <LazyMap address={address} facilityName={facilityName} />
    </div>
  );
};

export default AddressSection;
