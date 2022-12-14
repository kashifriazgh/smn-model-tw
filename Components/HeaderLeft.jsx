import React, { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FcBrokenLink } from 'react-icons/fc';

export default function HeaderLeft() {
  const [showResult, setShowResult] = useState(false);
  const showSearchResult = () => {
    setShowResult(true);
  };
  useEffect(() => {
    document.body.addEventListener(
      'click',
      function (e) {
        let target = e.target.dataset.id;
        if (target !== 'top-search') {
          setShowResult(false);
        }
      },
      []
    );
  });
  return (
    <>
      <div className="--wrapper flex relative gap-2">
        <div className="--logo max-w-xs mt-1 ml-2 hidden">
          <FcBrokenLink className="text-2xl" />
        </div>
        <div className="--search hidden md:flex rounded-2xl bg-gray-100 relative w-48 flex gap-2">
          <div className="--search-icon mt-2 ml-2">
            <BiSearchAlt2 />
          </div>
          <input
            data-id="top-search"
            type="search"
            className="bg-transparent outline-none p-1  w-48 group focus:rounded-none "
            placeholder="Search"
            onClick={showSearchResult}
          />
          <div
            data-id="top-search"
            className={`--search-result w-48 shadow-md bg-white absolute top-full ${
              showResult ? 'h-48' : ''
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
