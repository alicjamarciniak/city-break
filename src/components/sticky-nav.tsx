'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

import logoSrc from '../public/images/logo.png';

export function StickyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 bg-white h-[60px] z-50 m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px] relative">
          {/* Left side navigation links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </div>

          {/* Logo (centered on desktop, left-aligned on mobile) */}
          <div className="flex-shrink-0 flex items-center p-2 bg-white rounded-full absolute top-0 left-0 right-0 w-[96px] mx-auto">
            <Link href="/" className="font-bold text-xl text-gray-900">
              <Image alt="logo" src={logoSrc} width={80} height={80} />
            </Link>
          </div>

          {/* Right side navigation links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
