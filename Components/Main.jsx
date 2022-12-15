import React from 'react';
import Image from 'next/legacy/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { RiLiveFill } from 'react-icons/ri';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { FcVideoCall } from 'react-icons/fc';
import iconDiamond from '../images/icon-values.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import user5 from '../images/user5.png';
import landscapeImg from '../images/landscape.jpg';
import landscapeImg2 from '../images/landscape2.jpg';
import hotel from '../images/hotel.jpg';
import snow from '../images/snow.jpg';
import library from '../images/library.jpg';
import mosque from '../images/mosque.jpg';

import { TfiMoreAlt } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';
import { BiShare } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';

export default function Main() {
  const mySwal = withReactContent(Swal);
  return (
    <>
      <div className="--container m-3 p-2 bg-white rounded-lg">
        <CreatePost mySwal={mySwal} />
      </div>
      <div className="p-2 m-1">
        <Post />
      </div>
    </>
  );
}

export const CreatePost = (props) => {
  const { mySwal } = props;
  const openCreatePost = () => {
    mySwal.fire({
      input: 'textarea',
      inputLabel: 'Create Post',
      inputPlaceholder: 'What you are feeling now...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    });
  };
  return (
    <>
      <div className="w-full p-3">
        <div
          onClick={openCreatePost}
          className="cursor-pointer hover:shadow-sm p-2 mb-1 text-gray-400 w-full border-2 border-gray-300 rounded-md resize-none"
        >
          What is on your mind . . .
        </div>

        <div className="--create-post-action w-full flex gap-2 mt-2">
          <div className="w-1/3  py-1 flex justify-center items-center font-semibold hover:bg-gray-100 rounded-md cursor-pointer">
            <RiLiveFill className="text-2xl text-blue-400 mr-2 " /> Live
          </div>
          <div className="w-1/3  flex justify-center items-center font-semibold hover:bg-gray-100 rounded-md cursor-pointer">
            <HiOutlinePhotograph className="text-2xl text-rose-400 mr-2 " />{' '}
            Photo
          </div>
          <div className="w-1/3  flex justify-center items-center font-semibold hover:bg-gray-100 rounded-md cursor-pointer">
            <FcVideoCall className="text-2xl text-rose-400 mr-2 " /> Video
          </div>
        </div>
      </div>
    </>
  );
};

export const Post = () => {
  return (
    <>
      <div className="--post-container mb-5 w-full bg-white p-1">
        <div className="--post-header w-full flex">
          <div className="--post-user-img w-2/12">
            <div className="w-12 h-12 overflow-hidden rounded-full border cursor-pointer border-gray-200 hover:border-gray-300 p-0.5">
              <Image src={user1} />
            </div>
          </div>
          <div className="--post-title w-3/5">
            <p className="--user-title font-semibold cursor-pointer">
              International Tourism Council - Official Page
            </p>
            <p className="--date text-gray-400 text-sm">5 December at 4:50</p>
          </div>
          <div className="--post-more-actions w-1/5 flex items-center flex-row-reverse gap-2">
            <div className="text-lg cursor-pointer">
              <AiOutlineClose />
            </div>
            <div className="text-lg">
              <TfiMoreAlt />
            </div>
          </div>
        </div>{' '}
        {/* Post Header end */}
        <div className="--post-description p-2 text-sm">
          <p>
            Some Lorem ipsum go aka dfak Some Lorem ipsum go aka dfak Some Lorem
            ipsum go aka dfak
          </p>
        </div>{' '}
        {/* Post Description End */}
        <div className="--post-image w-full">
          <Image src={landscapeImg2} layout="responsive" />
        </div>{' '}
        {/* post image end */}
        <div className="--post-statistics w-full">
          <div className="w-full flex py-2 px-2 text-gray-400">
            <div className="w-1/3 md:w-1/2  flex">
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-blue-400 rounded-full">
                <AiTwotoneLike className="text-white" />
              </div>
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-red-400 rounded-full">
                <AiFillHeart className="text-white" />
              </div>
              <div className="ml-2 text-sm cursor-pointer">Likes</div>
            </div>
            <div className="w-1/3 md:w-1/4 px-1 text-sm cursor-pointer">
              345 comments
            </div>
            <div className="w-1/3 md:w-1/4 text-sm cursor-pointer">
              61 shares
            </div>
          </div>
        </div>{' '}
        {/* Post Statistics End */}
        <div className="w-full flex gap-3">
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiLike className="text-xl mt-0.5 " /> Like
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <GoComment className="text-lg mt-1.5 " /> Comments
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiShare className=" text-lg mt-1 " />
            Share
          </div>
        </div>
      </div>{' '}
      {/* First Post End */}
      <div className="--post-container mb-5 w-full bg-white p-1">
        <div className="--post-header w-full flex">
          <div className="--post-user-img w-2/12">
            <div className="w-12 h-12 overflow-hidden rounded-full border cursor-pointer border-gray-200 hover:border-gray-300 p-0.5">
              <Image src={user2} />
            </div>
          </div>
          <div className="--post-title w-3/5">
            <p className="--user-title font-semibold cursor-pointer">
              City Night Rider - Portu
            </p>
            <p className="--date text-gray-400 text-sm">21 November at 6:10</p>
          </div>
          <div className="--post-more-actions w-1/5 flex items-center flex-row-reverse gap-2">
            <div className="text-lg cursor-pointer">
              <AiOutlineClose />
            </div>
            <div className="text-lg">
              <TfiMoreAlt />
            </div>
          </div>
        </div>{' '}
        {/* Post Header end */}
        <div className="--post-description p-2 text-sm">
          <p>
            Some Lorem ipsum go aka dfak Some Lorem ipsum go aka dfak Some Lorem
            ipsum go aka dfak
          </p>
        </div>{' '}
        {/* Post Description End */}
        <div className="--post-image w-full">
          <Image src={snow} layout="responsive" />
        </div>{' '}
        {/* post image end */}
        <div className="--post-statistics w-full">
          <div className="w-full flex py-2 px-2 text-gray-400">
            <div className="w-1/3 md:w-1/2  flex">
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-blue-400 rounded-full">
                <AiTwotoneLike className="text-white" />
              </div>
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-red-400 rounded-full">
                <AiFillHeart className="text-white" />
              </div>
              <div className="ml-2 text-sm cursor-pointer">144 Likes</div>
            </div>
            <div className="w-1/3 md:w-1/4 px-1 text-sm cursor-pointer">
              105 comments
            </div>
            <div className="w-1/3 md:w-1/4 text-sm cursor-pointer">
              43 shares
            </div>
          </div>
        </div>{' '}
        {/* Post Statistics End */}
        <div className="w-full flex gap-3">
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiLike className="text-xl mt-0.5 " /> Like
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <GoComment className="text-lg mt-1.5 " /> Comments
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiShare className=" text-lg mt-1 " />
            Share
          </div>
        </div>
      </div>{' '}
      {/* Second Post End */}
      <div className="--post-container mb-5 w-full bg-white p-1">
        <div className="--post-header w-full flex">
          <div className="--post-user-img w-2/12">
            <div className="w-12 h-12 overflow-hidden rounded-full border cursor-pointer border-gray-200 hover:border-gray-300 p-0.5">
              <Image src={user3} />
            </div>
          </div>
          <div className="--post-title w-3/5">
            <p className="--user-title font-semibold cursor-pointer">
              Hadi Books - Old & New
            </p>
            <p className="--date text-gray-400 text-sm">28 November at 11:33</p>
          </div>
          <div className="--post-more-actions w-1/5 flex items-center flex-row-reverse gap-2">
            <div className="text-lg cursor-pointer">
              <AiOutlineClose />
            </div>
            <div className="text-lg">
              <TfiMoreAlt />
            </div>
          </div>
        </div>{' '}
        {/* Post Header end */}
        <div className="--post-description p-2 text-sm">
          <p>
            Some Lorem ipsum go aka dfak Some Lorem ipsum go aka dfak Some Lorem
            ipsum go aka dfak
          </p>
        </div>{' '}
        {/* Post Description End */}
        <div className="--post-image w-full">
          <Image src={library} layout="responsive" />
        </div>{' '}
        {/* post image end */}
        <div className="--post-statistics w-full">
          <div className="w-full flex py-2 px-2 text-gray-400">
            <div className="w-1/3 md:w-1/2  flex">
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-blue-400 rounded-full">
                <AiTwotoneLike className="text-white" />
              </div>
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-red-400 rounded-full">
                <AiFillHeart className="text-white" />
              </div>
              <div className="ml-2 text-sm cursor-pointer">93 Likes</div>
            </div>
            <div className="w-1/3 md:w-1/4 px-1 text-sm cursor-pointer">
              45 comments
            </div>
            <div className="w-1/3 md:w-1/4 text-sm cursor-pointer">
              6 shares
            </div>
          </div>
        </div>{' '}
        {/* Post Statistics End */}
        <div className="w-full flex gap-3">
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiLike className="text-xl mt-0.5 " /> Like
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <GoComment className="text-lg mt-1.5 " /> Comments
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiShare className=" text-lg mt-1 " />
            Share
          </div>
        </div>
      </div>{' '}
      {/* Third Post End */}
      <div className="--post-container mb-5 w-full bg-white p-1">
        <div className="--post-header w-full flex">
          <div className="--post-user-img w-2/12">
            <div className="w-12 h-12 overflow-hidden rounded-full border cursor-pointer border-gray-200 hover:border-gray-300 p-0.5">
              <Image src={user4} />
            </div>
          </div>
          <div className="--post-title w-3/5">
            <p className="--user-title font-semibold cursor-pointer">
              Naveed Ahmad - Official
            </p>
            <p className="--date text-gray-400 text-sm">2 December at 1:05</p>
          </div>
          <div className="--post-more-actions w-1/5 flex items-center flex-row-reverse gap-2">
            <div className="text-lg cursor-pointer">
              <AiOutlineClose />
            </div>
            <div className="text-lg">
              <TfiMoreAlt />
            </div>
          </div>
        </div>{' '}
        {/* Post Header end */}
        <div className="--post-description p-2 text-sm">
          <p>
            Some Lorem ipsum go aka dfak Some Lorem ipsum go aka dfak Some Lorem
            ipsum go aka dfak
          </p>
        </div>{' '}
        {/* Post Description End */}
        <div className="--post-image w-full">
          <Image src={mosque} layout="responsive" />
        </div>{' '}
        {/* post image end */}
        <div className="--post-statistics w-full">
          <div className="w-full flex py-2 px-2 text-gray-400">
            <div className="w-1/3 md:w-1/2  flex">
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-blue-400 rounded-full">
                <AiTwotoneLike className="text-white" />
              </div>
              <div className="w-4 h-4 p-0.5 mt-0.5 flex justify-center items-center bg-red-400 rounded-full">
                <AiFillHeart className="text-white" />
              </div>
              <div className="ml-2 text-sm cursor-pointer">29 Likes</div>
            </div>
            <div className="w-1/3 md:w-1/4 px-1 text-sm cursor-pointer">
              34 comments
            </div>
            <div className="w-1/3 md:w-1/4 text-sm cursor-pointer">
              12 shares
            </div>
          </div>
        </div>{' '}
        {/* Post Statistics End */}
        <div className="w-full flex gap-3">
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiLike className="text-xl mt-0.5 " /> Like
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <GoComment className="text-lg mt-1.5 " /> Comments
          </div>
          <div className="w-1/3 flex gap-1 hover:bg-gray-100 p-1 rounded-md cursor-pointer hover:text-blue-400">
            <BiShare className=" text-lg mt-1 " />
            Share
          </div>
        </div>
      </div>{' '}
      {/* Fourth Post End */}
    </>
  );
};
