'use client';

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimatedCounterProps = {
  to: number;
};

const AnimatedCounter = ({ to }: AnimatedCounterProps) => {
  const from = Math.round(0.01 * to);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(from);
  const smoothCount = useSpring(count, {
    stiffness: 100,
    damping: 20,
  });
  const displayCount = useTransform(smoothCount, (latest) =>
    Math.round(latest),
  );

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        count.set(to);
      }, 100);
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{displayCount}</motion.span>;
};

export default AnimatedCounter;
