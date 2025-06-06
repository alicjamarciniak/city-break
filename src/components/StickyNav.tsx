'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { handleWIPLinks } from '@/utils/sonner/toast';

type StickyNavProps = {
  isHomepage?: boolean;
};

export const StickyNav = ({ isHomepage = false }: StickyNavProps) => {
  const t = useTranslations('Nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen ? (
        <div
          className="fixed h-[100vh] w-[100vw] bg-black/30 z-[998]"
          onClick={toggleMenu}
        />
      ) : null}

      <nav
        className={`md:fixed top-0 h-[60px] m-0 ${isMenuOpen ? 'fixed bg-white w-[70vw] z-[999]' : 'absolute bg-transparent w-full z-[40]'}`}
      >
        <div className="mx-auto px-6 lg:px-24 md:px-10 md:bg-white">
          <div className="flex justify-between items-center h-[60px] relative">
            {/* Left side navigation links (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link className="text-gray-700 hover:text-gray-900" href="/">
                {t('linkHome')}
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-900"
                href="/about"
                onClick={handleWIPLinks}
              >
                {t('linkAbout')}
              </Link>
            </div>

            {/* Logo (centered on desktop, left-aligned on mobile) */}
            <div
              className={`${isMenuOpen && 'hidden'} flex-shrink-0 flex items-center p-2 md:bg-white rounded-full absolute top-0 left-0 right-0 w-[96px] mx-auto`}
            >
              <Link className="font-bold text-xl text-gray-900" href="/">
                {/* eslint-disable-next-line react/jsx-max-depth */}
                <Image
                  alt="logo"
                  className={`${isHomepage ? 'invert' : 'filter-none'} md:filter-none w-16 h-16 md:w-auto md:h-auto`}
                  height={80}
                  priority
                  src="/images/logo.png"
                  width={80}
                />
              </Link>
            </div>

            {/* Right side navigation links (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                className="text-gray-700 hover:text-gray-900"
                href="/services"
                onClick={handleWIPLinks}
              >
                {t('linkServices')}
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-900"
                href="/contact"
                onClick={handleWIPLinks}
              >
                {t('linkContact')}
              </Link>
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden mt-3">
              <button
                className={`${isHomepage ? 'text-white' : 'text-gray-700'} lg:text-gray-700 lg:hover:text-gray-900`}
                onClick={toggleMenu}
                type="button"
              >
                {isMenuOpen ? (
                  <X className="text-gray-700" size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen ? (
          <div className="md:hidden h-[100vh] z-[55]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-[70vw] h-full bg-white">
              <Link
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                href="#"
              >
                {t('linkHome')}
              </Link>
              <Link
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                href="/about"
                onClick={handleWIPLinks}
              >
                {t('linkAbout')}
              </Link>
              <Link
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                href="/services"
                onClick={handleWIPLinks}
              >
                {t('linkServices')}
              </Link>
              <Link
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                href="/contact"
                onClick={handleWIPLinks}
              >
                {t('linkContact')}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};
