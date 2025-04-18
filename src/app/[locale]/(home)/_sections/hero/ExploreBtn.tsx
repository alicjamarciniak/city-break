'use client';

import { Button } from '@/components/ui/button';
import { showWIPToast } from '@/utils/sonner/toast';
import React from 'react';

const ExploreBtn = ({ text }: { text: string }) => {
  return (
    <Button
      className="mt-20 lg:mt-10 rounded-full py-5 px-20 drop-shadow-md uppercase"
      variant="special"
      onClick={showWIPToast}
    >
      {text}
    </Button>
  );
};

export default ExploreBtn;
