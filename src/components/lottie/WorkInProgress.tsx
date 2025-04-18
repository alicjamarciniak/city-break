'use client';

import * as WIPAnimation from '@/assets/lottie/signpost.json';
import { useLottie } from 'lottie-react';

const WIPLottieAnimation = () => {
  const defaultOptions = {
    animationData: WIPAnimation,
    loop: false,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="w-full">{View}</div>;
};

export default WIPLottieAnimation;
