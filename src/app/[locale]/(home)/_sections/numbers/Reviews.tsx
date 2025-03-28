'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const Reviews = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Reviews;
