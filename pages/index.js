import React from 'react';

export default function index() {
  return (
    <>
      <div className="text-2xl text-green-400 dark:text-white dark:bg-slate-200">
        Change the theme mode to dark to check the result. If text color change
        to white, it works. Otherwise, it does't work.
      </div>
      <div className="bg-red-300 p-8 m-4 text-4xl dark:bg-slate-100">
        This is a big text.
      </div>
    </>
  );
}
