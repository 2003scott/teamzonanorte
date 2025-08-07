'use client';
import { Button } from '@/components/atoms/button';
import { navItems } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border-secondary mx-auto max-w-[1333px] border-b px-4 py-3 sm:px-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          <ul className="hidden md:flex md:gap-8">
            {navItems.map(({ title, href }) => (
              <li key={title}>
                <Link href={href} className="hover:text-primary transition-colors duration-500">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <Button variant="secondary" iconName="MoveRight" size={'md'} className="rounded-full py-6 font-bold">
            Contactanos
          </Button>
        </div>

        <button className="text-gray-500 hover:text-gray-700 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="animate-fadeIn py-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            {navItems.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="hover:text-primary block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button
              variant="secondary"
              iconName="MoveRight"
              size={'md'}
              className="w-full rounded-full py-5 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactanos
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
