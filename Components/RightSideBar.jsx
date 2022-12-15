import React from 'react';
import Image from 'next/legacy/image';
import iconHeart from '../images/icon-services4.png';
import topBannerImg from '../images/landscape2.jpg';
import iconDiamond from '../images/icon-values.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import user5 from '../images/user5.png';

export default function RightSideBar() {
  return (
    <>
      <div className="--box  p-3">
        <TopBanner />
        <br />
        <h2 className="text-blue-600 font-semibold ">
          Suggested Pages for you
        </h2>
        <SuggestedGroup
          title="Health Care"
          desc="Heart Specialists Center"
          likes="330k likes"
        >
          <Image src={iconHeart} />
        </SuggestedGroup>
        <SuggestedGroup
          title="Diamond Machinery"
          desc="Agriculture Machinery hub"
          likes="219k likes"
        >
          <Image src={iconDiamond} />
        </SuggestedGroup>
        <br />
        <h2 className="text-gray-600">People Online</h2>
        <PeopleOnline />
      </div>
    </>
  );
}

export const TopBanner = () => {
  return (
    <>
      <div className="w-full h-36 rounded-md bg-white cursor-pointer hover:shadow-md hover:opacity-80 overflow-hidden object-cover">
        <Image src={topBannerImg} layout="responsive" />
      </div>
    </>
  );
};

export const SuggestedGroup = (props) => {
  const { title, children, desc, likes } = props;
  return (
    <>
      <div className="w-full p-2 flex flex-col">
        <div className="--suggestedPage w-full flex gap-1 rounded-md p-1 bg-gray-50 hover:bg-gray-200 cursor-pointer">
          <div className="--pageImg w-1/4 h-full ">{children}</div>
          <div className="page-meta">
            <h2 className="text-md px-1 font-bold">{title}</h2>
            <p className="text-sm px-1">{desc}</p>
            <p className="text-sm px-1 text-gray-400">{likes}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const PeopleOnline = () => {
  return (
    <>
      <div className="flex gap-2 mt-2">
        <div className="overflow-hidden p-0.5 rounded-full w-8 h-8 border-2 border-gray-200 cursor-pointer hover:border-blue-300">
          <Image src={user1} layout="responsive" />
        </div>
        <div className="overflow-hidden p-0.5 rounded-full w-8 h-8 border-2 border-gray-200 cursor-pointer hover:border-blue-300">
          <Image src={user2} layout="responsive" />
        </div>
        <div className="overflow-hidden p-0.5 rounded-full w-8 h-8 border-2 border-gray-200 cursor-pointer hover:border-blue-300">
          <Image src={user3} layout="responsive" />
        </div>
        <div className="overflow-hidden p-0.5 rounded-full w-8 h-8 border-2 border-gray-200 cursor-pointer hover:border-blue-300">
          <Image src={user4} layout="responsive" />
        </div>
        <div className="overflow-hidden p-0.5 rounded-full w-8 h-8 border-2 border-gray-200 cursor-pointer hover:border-blue-300">
          <Image src={user5} layout="responsive" />
        </div>
      </div>
    </>
  );
};
