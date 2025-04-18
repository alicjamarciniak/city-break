'use client';

import { handleWIPLinks } from '@/utils/sonner/toast';
import Link from 'next/link';

const SeeMoreBtn = ({ text }: { text: string }) => {
  return (
    <Link href="/opinions" onClick={handleWIPLinks}>
      {text}
    </Link>
  );
};

export default SeeMoreBtn;
