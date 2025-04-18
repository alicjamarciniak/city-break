'use client';

import * as NotFoundAnimation from '@/assets/lottie/not-found.json';
import { useLottie } from 'lottie-react';

const NotFoundLottieAnimation = () => {
  const defaultOptions = {
    animationData: NotFoundAnimation,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="w-full">{View}</div>;
};

export default NotFoundLottieAnimation;
