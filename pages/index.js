import React from 'react';
import { useTheme } from 'next-themes';

export default function index() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="text-2xl text-green-400 dark:text-blue-800 dark:bg-slate-200">
        Change the theme mode to dark to check the result. If text color change
        to white, it works. Otherwise, it does't work.
      </div>
      <div className="bg-red-300 ring-4 p-8 m-4 text-4xl dark:bg-slate-100">
        This is a big text.
      </div>
      <br />
      <br />
      <h2>Good</h2>
      <button
        onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
        className="p-2 bg-gray-50 hover:bg-gray-100 dark:bg-slate-400 rounded-lg shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 dark:text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </>
  );
}
