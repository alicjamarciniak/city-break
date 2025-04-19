'use client';

import dynamic from 'next/dynamic';
import { HomeIcon, SewingPinIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

const LazyMap = dynamic(() => import('@/utils/leaflet/Map'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-full rounded-md" />,
});

type AddressSectionProps = {
  address: string;
  facilityName?: string;
};

const AddressSection = ({ address, facilityName }: AddressSectionProps) => {
  const t = useTranslations('Adventure');

  return (
    <div className="mt-10">
      <h3 className="t-h3">{t('addressSectionTitle')}</h3>
      <div className="mt-6 flex flex-col gap-3 text-sm lg:text-base">
        <p>
          <HomeIcon
            className="text-special inline-block mr-3"
            height={20}
            width={20}
          />
          {facilityName}
        </p>
        <p>
          <SewingPinIcon
            className="text-special inline-block mr-3"
            height={20}
            width={20}
          />
          {address}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <LazyMap address={address} facilityName={facilityName} />
      </motion.div>
    </div>
  );
};

export default AddressSection;
