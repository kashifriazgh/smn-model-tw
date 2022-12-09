import React from 'react';
import { BsMessenger } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';

export default function HeaderRight() {
  return (
    <>
      <div className="gap-2 md:gap-4 mr-4 hidden md:flex">
        <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
          <CgMenuGridO className="text-2xl" />
        </div>
        <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
          <BsMessenger className="text-lg text-blue-400" />
        </div>
        <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
          <MdNotifications className="text-2xl text-blue-400" />
        </div>
      </div>
    </>
  );
}
