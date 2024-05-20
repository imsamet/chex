'use client';
import Link from 'next/link';
import { Logo } from '@/components/icons';
import classNames from 'classnames';
export const Footer: React.FC = ({}) => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center py-3">
          <Link href="/">
            <Logo className="w-24 h-auto" />
          </Link>
          <div className="flex gap-3 lg:flex-row flex-col items-center">
            <span className="text-white text-xs pr-3">Word Buzz Entertainment Inc. © Since 1923 - 2024</span>
            <span className="text-white text-xs pr-3">Samet Çetin</span>
            <span className="text-white text-xs pr-3">imsametcetin@gmail.com</span>
            <span className="text-white text-xs">0507 834 0555</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
