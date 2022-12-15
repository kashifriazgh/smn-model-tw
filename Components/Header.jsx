import React from 'react';
import { useTheme } from 'next-themes';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';

export default function Header() {
  const { theme, setTheme } = useTheme();
  setTheme('light');

  return (
    <>
      <div className="w-full h-16 bg-white dark:bg-slate-800 sticky top-0 z-50">
        <div className="flex justify-between pt-4">
          <div className="-Left w-">
            <HeaderLeft />
          </div>
          <div className="-Center">
            <HeaderMiddle />
          </div>
          <div className="-Right">
            <HeaderRight />
          </div>
        </div>
      </div>
    </>
  );
}
