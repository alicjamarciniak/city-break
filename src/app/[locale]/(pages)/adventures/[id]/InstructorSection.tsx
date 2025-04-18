'use client';

import { Instructor } from '@/app/types/Adventure';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { handleWIPLinks } from '@/utils/sonner/toast';

type InstructorSectionProps = {
  instructor: Instructor;
};

const InstructorSection = ({ instructor }: InstructorSectionProps) => {
  const t = useTranslations('Adventure');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Card
        className={`flex bg-swamp-background/10 border-transparent lg:border-yukon-background/50 text-dark-foreground 
        mb-2 mt-3 lg:mt-10 p-0 lg:p-10 rounded-tr-[50px] lg:rounded-tr-xl`}
      >
        <div className="flex flex-col lg:flex-row">
          <div>
            <div className="h-[200px] w-auto lg:w-[150px] relative rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
              <Image
                src={`https:${instructor.fields.avatar.fields.file.url}`}
                alt={instructor.fields.avatarAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <CardHeader className="flex flex-row gap-3">
              <CardTitle className="text-black font-thin text-sm">
                {t('instructorSectionTitle')}
                <span className="text-special font-bold text-2xl block">
                  {instructor.fields.firstName} {instructor.fields.lastName}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-thin text-black">
                {instructor.fields.helloMessage}
              </p>

              <Link
                href=""
                className="text-yukon-background mt-3 flex items-center gap-2"
                onClick={handleWIPLinks}
              >
                {t('instructorSectionBtn')}
                <DoubleArrowRightIcon />
              </Link>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default InstructorSection;
