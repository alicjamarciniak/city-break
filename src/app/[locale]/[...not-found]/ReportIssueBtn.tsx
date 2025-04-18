'use client';
import { Button } from '@/components/ui/button';
import { handleWIPLinks } from '@/utils/sonner/toast';
import Link from 'next/link';

const ReportIssueBtn = ({ text }: { text: string }) => {
  return (
    <Link href="#" onClick={handleWIPLinks}>
      <Button variant="default" className="px-8 lg:px-10 lg:py-6 lg:min-w-48">
        {text}
      </Button>
    </Link>
  );
};

export default ReportIssueBtn;
