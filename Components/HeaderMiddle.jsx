import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';

export default function HeaderMiddle() {
  const [active, setActive] = useState();
  const changeActive = (e) => {
    setActive(e.target.dataset.id);
  };
  return (
    <>
      <div className="flex gap-6">
        <div
          onClick={changeActive}
          data-id="1"
          className={` px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
            active == 1 ? 'border-b-2 border-blue-500 ' : ''
          }`}
        >
          <AiFillHome />
        </div>
        <div
          onClick={changeActive}
          data-id="2"
          className={` px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
            active == 2 ? 'border-b-2 border-blue-500 ' : ''
          }`}
        >
          <MdVideoLibrary />
        </div>
        <div
          onClick={changeActive}
          data-id="3"
          className={` px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
            active == 3 ? 'border-b-2 border-blue-500 ' : ''
          }`}
        >
          <HiUserGroup />
        </div>
        <Link href="#">
          <div
            onClick={changeActive}
            data-id="4"
            className={` px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
              active == 4 ? 'border-b-2 border-blue-500 ' : ''
            }`}
          >
            <IoGameController />
          </div>
        </Link>
      </div>
    </>
  );
}
