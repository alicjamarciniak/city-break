'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoWidth, setVideoWidth] = useState(0);

  const { isSmDevice, isLgDevice, isXlDevice: isDesktop } = useMediaQueries();
  const verticalRatio = isLgDevice ? (isSmDevice ? -0.3 : -0.34) : 0;

  useLayoutEffect(() => {
    if (!isDesktop) {
      setVideoWidth(videoRef.current?.getBoundingClientRect().width || 0);
    }
  });

  return (
    <video
      poster="/images/sunset-placeholder.png"
      preload="auto"
      ref={videoRef}
      autoPlay
      loop
      muted
      className="absolute h-full max-w-none lg:w-[100vw] lg:h-auto"
      {...(!isDesktop
        ? { style: { marginLeft: verticalRatio * videoWidth } }
        : {})}
    >
      <source src="/videos/sunset.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
