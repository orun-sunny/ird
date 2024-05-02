import { useState } from "react";

const FilterPopUp = () => {
  const [visible,setVisible]=useState(true)
  const hideModel = ()=>{
    setVisible(false)
  }
  return (
    <div>
      {/* search input field start */}
      <div class="py-3">
        <input
          type="text"
          class="py-3 px-4 block w-full bg-slate-100 focus:outline-none rounded-lg text-sm focus:border-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Search Hadith"
        />
      </div>
      {/* search input field end */}

      <div className="py-3 noto-sans-bengali">
        <label className="block text-sm font-medium mb-2 dark:text-white">
          হাদিসের বই সিলেক্ট করুন
        </label>
        <select
          multiple=""
          data-hs-select='{
            "placeholder": "একাধিক সেলেক্ট করুন",
            "toggleTag": "<button type=\"button\"></button>",
            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
            "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
            "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
            "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
          }'
          className="hidden"
        >
          <option>সহিহ বুখারী</option>
          <option>সহিহ মুসলিম</option>
          <option>সুনানে আন-নাসায়ী</option>
          <option>সুনানে আবু দাউদ</option>
          <option>জামে আত-তিরমিজি</option>
          <option>সুনানে ইবনে মাজাহ</option>
          <option>মুয়াত্তা ইমাম মালিক</option>
          <option>রিয়াদুস সলেহিন</option>
          <option>বুলুগুল মারাম</option>
          <option>আল লু'লু ওয়াল মারজান</option>
        </select>
      </div>

      <div className="py-3 noto-sans-bengali">
        <label className="block text-sm font-medium mb-2 dark:text-white">
          হাদিসের অধ্যায় সিলেক্ট করুন
        </label>
        <select
          multiple=""
          data-hs-select='{
            "placeholder": "একাধিক সেলেক্ট করুন",
            "toggleTag": "<button type=\"button\"></button>",
            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
            "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
            "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
            "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
          }'
          className="hidden"
        >
          <option>সকল অধ্যায়</option>
        </select>
      </div>
      <div className="flex gap-x-6">
        <div className="flex">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-checkbox-group-4"
            checked=""
          />
          <label
            for="hs-checkbox-group-4"
            className=" ms-3 dark:text-neutral-400 noto-sans-bengali"
          >
            আংশিক মিল
          </label>
        </div>

        <div class="flex">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-green-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-checkbox-group-5"
            checked=""
          />
          <label
            for="hs-checkbox-group-5"
            className=" ms-3 dark:text-neutral-400 noto-sans-bengali"
          >
            হুবুহু মিল
          </label>
        </div>
      </div>

      <div className="flex justify-center gap-9 py-5">
          <button onClick={hideModel} className="bg-slate-200 px-7 py-2 rounded-lg noto-sans-bengali">বাতিল</button>
          <button className="bg-green-700 px-7 py-2 rounded-lg text-white noto-sans-bengali">সার্চ করুন</button>
      </div>
    </div>
  );
};
export default FilterPopUp;
