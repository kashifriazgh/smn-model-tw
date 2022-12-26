import React, { useEffect } from 'react';
import { BsMessenger } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';
import { useTheme } from 'next-themes';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { FcSettings } from 'react-icons/fc';
import { FaUserLock } from 'react-icons/fa';
import { MdOutlineAdsClick } from 'react-icons/md';
import { TbLanguageKatakana } from 'react-icons/tb';
import { MdDarkMode } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';

export default function HeaderRight() {
  const [openSettings, setOpenSettings] = useState(false);
  const changeOpenSettings = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <>
      <div className="gap-2 md:gap-4 mr-4 hidden md:flex">
        <div className="popup-wrapper">
          <div className=" w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
            <Tippy
              allowHTML
              content={<h2 className="bg-black p-2 rounded-md">Settings</h2>}
            >
              <CgMenuGridO onClick={changeOpenSettings} className="text-2xl" />
            </Tippy>
            <div
              data-id="popup-content"
              className={`popup-content shadow-lg dark:bg-slate-800 rounded-md w-80 ${
                openSettings ? '' : 'hidden'
              }`}
            >
              <SettingsContent />
            </div>
          </div>
        </div>

        <Tippy
          allowHTML
          content={<h2 className="bg-black p-2 rounded-md">Messages</h2>}
        >
          <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
            <BsMessenger className="text-lg text-blue-400" />
          </div>
        </Tippy>

        <Tippy
          allowHTML
          content={<h2 className="bg-black p-2 rounded-md">Messages</h2>}
        >
          <div className="hover:cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200">
            <MdNotifications className="text-2xl text-blue-400" />
          </div>
        </Tippy>
      </div>
    </>
  );
}

export const SettingsContent = () => {
  const [index, setIndex] = useState('');

  const changeIndex = (e) => {
    let target = e.currentTarget.dataset.id;
    setIndex(target);
    console.log(index);
  };
  const resetIndex = () => {
    setIndex(0);
  };
  return (
    <>
      <h2 className=" font-bold my-1  text-xl max-w-xs">Menu</h2>
      <hr />
      <div className="--inside-container overflow-hidden relative mt-2 w-full bg-white dark:bg-slate-800 p-1 rounded-md">
        <input
          focused
          type="text"
          className="search-bar bg-gray-300 outline-none px-2  rounded-xl"
        />
        <br />
        <div className="--setting-items-wrapper">
          <div
            data-id="1"
            onClick={changeIndex}
            className="--settings-item w-full rounded-md hover:bg-gray-100 dark:hover:bg-black p-1 my-1 flex gap-2"
          >
            <div className="--item-icon">
              <FcSettings className="mt-1" />
            </div>
            <div className="--item-content">
              <div className="--item-title font-semibold">Settings</div>
              <div className="--item-desc text-xs text-gray-400">
                Manage settings related to personal information, ads, payments
                and logins
              </div>
            </div>
          </div>
          <div
            data-id="2"
            onClick={changeIndex}
            className="--settings-item w-full rounded-md hover:bg-gray-100 dark:hover:bg-black p-1 my-1 flex gap-2"
          >
            <div className="--item-icon">
              <FaUserLock className="mt-1" />
            </div>
            <div className="--item-content">
              <div className="--item-title font-semibold">
                Privacy shortcuts
              </div>
              <div className="--item-desc text-sm text-gray-400">
                Control who sees what you share on Facebook.
              </div>
            </div>
          </div>{' '}
          {/* */}
          <div
            data-id="3"
            onClick={changeIndex}
            className="--settings-item dark:hover:bg-black w-full rounded-md hover:bg-gray-100 p-1 my-1 flex gap-2"
          >
            <div className="--item-icon">
              <MdOutlineAdsClick className="mt-1" />
            </div>
            <div className="--item-content">
              <div className="--item-title font-semibold">Ad Activity</div>
              <div className="--item-desc text-sm text-gray-400">
                See ads you recently interacted with and leave feedbacks
              </div>
            </div>
          </div>{' '}
          {/* */}
          <div
            data-id="4"
            onClick={changeIndex}
            className="--settings-item w-full dark:hover:bg-black rounded-md hover:bg-gray-100 p-1 my-1 flex gap-2"
          >
            <div className="--item-icon">
              <TbLanguageKatakana className="mt-1" />
            </div>
            <div className="--item-content">
              <div className="--item-title font-semibold">Language</div>
              <div className="--item-desc text-sm text-gray-400">
                Set Languages and translation preferences
              </div>
            </div>
          </div>{' '}
          {/* */}
          <div
            data-id="5"
            onClick={changeIndex}
            className="--settings-item dark:hover:bg-black w-full rounded-md hover:bg-gray-100 p-1 my-1 flex gap-2"
          >
            <div className="--item-icon">
              <MdDarkMode className="mt-1" />
            </div>
            <div className="--item-content">
              <div className="--item-title font-semibold">Dark mode</div>
              <div className="--item-desc text-sm text-gray-400">
                Change theme appearance to dark or light
              </div>
            </div>
          </div>
        </div>
        <Settings index={index} resetIndex={resetIndex} />
        <Privacy index={index} resetIndex={resetIndex} />
        <Ads index={index} resetIndex={resetIndex} />
        <Lang index={index} resetIndex={resetIndex} />
        <DarkMode index={index} resetIndex={resetIndex} />
      </div>{' '}
      {/* Inside container end */}
    </>
  );
};

export const Settings = (props) => {
  const { index, resetIndex } = props;
  return (
    <>
      <div
        className={`w-full p-2 absolute top-0  bg-white dark:bg-slate-800  h-full ${
          index == 1 ? 'left-0' : 'left-full'
        }`}
      >
        <BiArrowBack className="text-lg" onClick={resetIndex} />
        <h2 className="font-semibold text-lg">Settings</h2>
        <p className="py-1">
          Manage settings related to personal information, ads, payments and
          logins
        </p>
        <hr />
        <br />
        <div className="--settings-wrapper">
          <div className="--settings-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Account</h3>
            <p className="text-sm text-gray-800">
              Change user name , password, email and phone numbers
            </p>
          </div>

          <div className="--settings-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Payments</h3>
            <p className="text-sm text-gray-800">
              See your default and other payments methods
            </p>
          </div>

          <div className="--settings-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Login Security</h3>
            <p className="text-sm text-gray-800">
              Set login verification and authentication methods
            </p>
          </div>
        </div>{' '}
        {/* Settings wrapper end */}
      </div>
    </>
  );
};

export const Privacy = (props) => {
  const { index, resetIndex } = props;
  return (
    <>
      <div
        className={`w-full p-2 absolute top-0  bg-white dark:bg-slate-800 h-full ${
          index == 2 ? 'left-0' : 'left-full'
        }`}
      >
        <BiArrowBack className="text-lg" onClick={resetIndex} />
        <h2 className="font-semibold text-lg">Privacy</h2>
        <p className="py-1">Control who sees what you share on Facebook.</p>
        <hr />
        <br />
        <div className="--privacy-wrapper">
          <div className="--privacy-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Who sees your photos</h3>
            <p className="text-sm text-gray-800">
              Set who can see your photos and other content
            </p>
          </div>

          <div className="--privacy-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Who can connect with you</h3>
            <p className="text-sm text-gray-800">
              Set who can send you friend request or messages
            </p>
          </div>

          <div className="--privacy-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Personal information</h3>
            <p className="text-sm text-gray-800">
              Set who can view my profile data. Everyone, friends or only your
            </p>
          </div>
        </div>{' '}
        {/* Settings wrapper end */}
      </div>
    </>
  );
};

export const Ads = (props) => {
  const { index, resetIndex } = props;
  return (
    <>
      <div
        className={`w-full p-2 absolute top-0  bg-white dark:bg-slate-800 h-full ${
          index == 3 ? 'left-0' : 'left-full'
        }`}
      >
        <BiArrowBack className="text-lg" onClick={resetIndex} />
        <h2 className="font-semibold text-lg">Ads activity</h2>
        <p className="py-1">
          See ads you recently interacted with and leave feedbacks
        </p>
        <hr />
        <br />
        <div className="--ads-wrapper">
          <div className="--ads-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">
              Ads you recently interactive
            </h3>
            <p className="text-sm text-gray-800">
              See list of ads you recently clicked or watched
            </p>
          </div>

          <div className="--ads-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Your ads</h3>
            <p className="text-sm text-gray-800">
              Manages your own ads and set budget
            </p>
          </div>

          <div className="--ads-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Insights</h3>
            <p className="text-sm text-gray-800">
              See and analyze progress of your ads
            </p>
          </div>
        </div>{' '}
        {/* Ads wrapper end */}
      </div>
    </>
  );
};

export const Lang = (props) => {
  const { index, resetIndex } = props;
  return (
    <>
      <div
        className={`w-full p-2 absolute top-0  bg-white dark:bg-slate-800 h-full ${
          index == 4 ? 'left-0' : 'left-full'
        }`}
      >
        <BiArrowBack className="text-lg" onClick={resetIndex} />
        <h2 className="font-semibold text-lg">Languages</h2>
        <p className="py-1">Set Languages and translation preferences</p>
        <hr />
        <br />
        <div className="--lang-wrapper">
          <div className="--lang-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Your primary language</h3>
            <p className="text-sm text-gray-800">Set your primary language</p>
            <select className="mt-1 mx-1 text-lg p-1 w-4/5 rounded-md">
              <option>English UK</option>
              <option>English US</option>
              <option>French</option>
              <option>German</option>
              <option>Arabic</option>
              <option>Urdu</option>
            </select>
          </div>

          <div className="--lang-item p-0.5 rounded-md my-1 hover:bg-gray-100 dark:hover:bg-slate-400">
            <h3 className="text-md font-semibold">Secondary language</h3>
            <p className="text-sm text-gray-800">Set your secondary language</p>
            <select
              defaultValue="Urdu"
              className="mt-1 mx-1 text-lg p-1 w-4/5 rounded-md"
            >
              <option>English UK</option>
              <option>English US</option>
              <option>French</option>
              <option>German</option>
              <option>Arabic</option>
              <option>Urdu</option>
            </select>
          </div>
        </div>{' '}
        {/* Settings wrapper end */}
      </div>
    </>
  );
};

export const DarkMode = (props) => {
  const { theme, setTheme } = useTheme();

  const { index, resetIndex } = props;
  const [modeIndex, setModeIndex] = useState('');
  const changeModeIndex = (e) => {
    const targetId = e.currentTarget.dataset.id;
    setModeIndex(targetId);
    if (targetId == 1) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <div
        className={`w-full p-2 absolute top-0  bg-white dark:bg-slate-800 h-full ${
          index == 5 ? 'left-0' : 'left-full'
        }`}
      >
        <BiArrowBack className="text-lg" onClick={resetIndex} />
        <h2 className="font-semibold text-lg">DarkMode</h2>
        <p className="py-1">Set your preferred theme</p>
        <hr />
        <br />
        <div
          className={`flex gap-4  p-1 rounded-md ${
            modeIndex == 1
              ? 'bg-gray-300 hover:bg-gray-300'
              : 'hover:bg-gray-50'
          }`}
          data-id="1"
          onClick={changeModeIndex}
        >
          <div> Dark</div>
          <div
            className={`mt-1 w-4 h-4 rounded-full border-2 border-blue-600 ${
              modeIndex == 1 ? 'bg-blue-600' : 'bg-white '
            }`}
          ></div>
        </div>
        <br />
        <div
          className={`flex gap-4  p-1 rounded-md ${
            modeIndex == 2
              ? 'bg-gray-300 hover:bg-gray-300 '
              : 'hover:bg-gray-50 dark:hover:bg-slate-400'
          }`}
          data-id="2"
          onClick={changeModeIndex}
        >
          <div> Light</div>
          <div
            className={`mt-1 w-4 h-4 rounded-full border-2 border-blue-600 ${
              modeIndex == 2 ? 'bg-blue-600' : 'bg-white '
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};
