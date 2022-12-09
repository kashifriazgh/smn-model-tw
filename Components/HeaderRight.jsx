import React from 'react';
import { BsMessenger } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';

export default function HeaderRight() {
  return (
    <>
      <div className="flex gap-6 mr-4">
        <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
          <CgMenuGridO />
        </div>
        <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
          <BsMessenger />
        </div>
        <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
          <MdNotifications />
        </div>
      </div>
    </>
  );
}
