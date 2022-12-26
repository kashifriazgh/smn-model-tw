import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';
import { HiMenuAlt2 } from 'react-icons/hi';

export default function HeaderMiddle(props) {
  const { openMenu, setOpenMenu } = props;
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [active, setActive] = useState();
  const changeActive = (e) => {
    setActive(e.target.dataset.id);
  };
  return (
    <>
      <div className="flex md:gap-4">
        <div
          onClick={changeActive}
          data-id="1"
          className={` px-5 md:px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
            active == 1 ? 'border-b-2 border-blue-500 ' : ''
          }`}
        >
          <AiFillHome className="text-2xl text-gray-600" />
        </div>
        <div
          onClick={changeActive}
          data-id="2"
          className={` px-5 md:px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
            active == 2 ? 'border-b-2 border-blue-500 ' : ''
          }`}
        >
          <MdVideoLibrary className="text-2xl text-gray-600" />
        </div>
        <div
          onClick={changeActive}
          data-id="3"
          className={` px-5 md:px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
            active == 3 ? 'border-b-2 border-blue-500 ' : ''
          }`}
        >
          <HiUserGroup className="text-2xl text-gray-600" />
        </div>
        <Link href="#">
          <div
            onClick={changeActive}
            data-id="4"
            className={` px-5 md:px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md ${
              active == 4 ? 'border-b-2 border-blue-500 ' : ''
            }`}
          >
            <IoGameController className="text-2xl text-gray-600" />
          </div>
        </Link>
        <Link href="#">
          <div
            onClick={changeActive}
            data-id="4"
            className={` px-5 md:px-8 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-md `}
          >
            <HiMenuAlt2
              onClick={toggleMenu}
              className="text-2xl text-gray-600 md:hidden"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
