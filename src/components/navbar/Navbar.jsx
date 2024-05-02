import { FaHandHoldingHeart } from "react-icons/fa";

import Logo from "../../assets/images/home-logo.png";

import { useState } from "react";

const Navbar = () => {
  const [visibleModel, setVisibleModel] = useState(false);
  const showModel = () => {
    setVisibleModel(true);
  };
  return (
    <div className="flex justify-between px-5 md:px-10 py-2 md:py-5 border md:border-none">
      <div>
        <div className="flex gap-5 items-center">
          <img src={Logo} className="w-10" alt="logo" />
          <h1 className="text-xl text-green-700 noto-sans-bengali">
            হাদিস সমূহ
          </h1>
        </div>

        <p className="px-14"> হাদিস পড়ুন শিখুন এবং জানুন</p>
      </div>

      {/* big screen nav item  start */}
      <div className="hidden md:block">
        <div className="flex gap-10">
          {/* Search bar  START*/}
          <div class="relative">
            <input
              type="text"
              id="hs-leading-icon"
              class="py-3 px-4 ps-11 w-full border  rounded-lg text-sm focus:z-10  focus:outline-none  disabled:opacity-50  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Search Hadith"
            />
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <svg
                className="flex-shrink-0 size-4  text-gray-700 md:text-gray-300 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
          {/* Search bar  end*/}

          <div>
            <button
              type="button"
              className="bg-green-800 p-4 gap-4 rounded flex"
              data-hs-overlay="#hs-slide-down-animation-modal"
            >
              সাপোর্ট করুন <FaHandHoldingHeart color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
