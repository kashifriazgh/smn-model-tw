import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillBarChartFill } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { RiBubbleChartLine, RiFlagLine } from 'react-icons/ri';
import { GrAnnounce } from 'react-icons/gr';
import { MdOutlineWidgets } from 'react-icons/md';
import { MdGroups } from 'react-icons/md';
import { RxVideo } from 'react-icons/rx';
import { MdWatchLater } from 'react-icons/md';
import { RiFlag2Fill } from 'react-icons/ri';

export default function LeftSideBar() {
  return (
    <>
      <div className="--box w-full py-1">
        <MajorMenu />
        <hr />
        <SuggestedMenu />
        <hr />
        <Shortcuts />
      </div>
    </>
  );
}

export const MajorMenu = () => {
  return (
    <>
      <ul>
        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <AiFillHeart className="text-red-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Making Web Beaut...</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <BsFillBarChartFill className="text-blue-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Marketing</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <AiOutlinePieChart className="text-blue-600 mt-1 text-xl" />
          </div>
          <div className="--item-title">Marketplace</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <RiBubbleChartLine className="text-orange-700 mt-1 text-xl" />
          </div>
          <div className="--item-title">Play & subscribe</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <GrAnnounce className="text-red-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Ad Center</div>
        </li>
      </ul>
    </>
  );
};

export const SuggestedMenu = () => {
  return (
    <>
      <h2 className="mt-1 px-1 text-gray-400 font-bold">Suggested</h2>
      <ul>
        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <MdOutlineWidgets className="text-red-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Making Web Beaut...</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <MdGroups className="text-blue-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Marketing</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <AiOutlinePieChart className="text-blue-600 mt-1 text-xl" />
          </div>
          <div className="--item-title">Marketplace</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <RxVideo className="text-orange-700 mt-1 text-xl" />
          </div>
          <div className="--item-title">Play & subscribe</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <MdWatchLater className="text-red-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Recent</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <RiFlag2Fill className="text-red-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Ad Center</div>
        </li>
      </ul>
    </>
  );
};

export const Shortcuts = () => {
  return (
    <>
      <h2 className="mt-1 px-1 text-gray-400 font-bold">Your Shortcuts</h2>
      <ul>
        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <MdOutlineWidgets className="text-red-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Making Web Beaut...</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <MdGroups className="text-blue-400 mt-1 text-xl" />
          </div>
          <div className="--item-title">Marketing</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <AiOutlinePieChart className="text-blue-600 mt-1 text-xl" />
          </div>
          <div className="--item-title">Marketplace</div>
        </li>

        <li className="flex gap-2 mb-1 rounded-md hover:bg-gray-200 py-2 px-2 transition-all cursor-pointer">
          <div className="--item-icon max-w-xs">
            <RxVideo className="text-orange-700 mt-1 text-xl" />
          </div>
          <div className="--item-title">Play & subscribe</div>
        </li>
      </ul>
    </>
  );
};
