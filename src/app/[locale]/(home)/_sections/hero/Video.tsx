'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoWidth, setVideoWidth] = useState(0);
  const [loading, setLoading] = useState(true);

  const { isSmDevice, isLgDevice, isXlDevice: isDesktop } = useMediaQueries();
  const verticalRatio = isLgDevice ? (isSmDevice ? -0.3 : -0.34) : 0;

  useLayoutEffect(() => {
    if (!isDesktop) {
      setVideoWidth(videoRef.current?.getBoundingClientRect().width || 0);
    }
    setLoading(false);
  });

  return loading ? (
    <div>Loading...</div>
  ) : (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      className="absolute h-full max-w-none lg:w-[100vw] lg:h-auto"
      //   style={{ marginLeft: verticalRatio * videoWidth }}
      {...(!isDesktop
        ? { style: { marginLeft: verticalRatio * videoWidth } }
        : {})}
    >
      <source src="/videos/sunset.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
