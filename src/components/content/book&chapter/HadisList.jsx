import ListItem from "./ListItem";
const HadisList = () => {
  return (
    <div className="bg-white rounded-2xl">
      <nav className="flex space-x-1 border md:border-none" aria-label="Tabs" role="tablist">
        <button
          type="button"
          className="hs-tab-active:bg-green-700 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center bg-transparent text-sm font-medium text-gray-700 md:rounded-tl-2xl disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 active"
          id="equal-width-elements-item-1"
          data-hs-tab="#equal-width-elements-1"
          aria-controls="equal-width-elements-1"
          role="tab"
        >
          বই
        </button>
        <button
          type="button"
          className="hs-tab-active:bg-green-700 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center  bg-transparent text-sm font-medium text-gray-700  md:rounded-tr-2xl disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300"
          id="equal-width-elements-item-2"
          data-hs-tab="#equal-width-elements-2"
          aria-controls="equal-width-elements-2"
          role="tab"
        >
          অধ্যায়
        </button>
      </nav>
      <hr />
      {/* Input Filter  */}
      <div class="relative py-5 px-3">
        <input
          type="text"
          id="hs-leading-icon"
          class="bg-slate-100 p-2 ps-7 md:block w-full rounded-lg text-sm focus:z-10  focus:outline-none  disabled:opacity-50  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Search for filter"
        />
        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
          <svg
            className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500"
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
      {/* Tab item start  */}
      <div className="px-3">
        {/* Tab 1 Start  */}
        <div
          id="equal-width-elements-1"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-1"
        >
          <div className="overflow-auto h-96 md:max-h-[400px] lg:max-h-[700px]">

            {/* Boos List */}
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
        </div>
        {/* Tab 1 end  */}

        {/* Tab 2 Start  */}
        <div
          id="equal-width-elements-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-2"
        >
          <div className="overflow-auto h-96 lg:min-h-fit md:max-h-[600px] lg:max-h-[700px]">
            {/* capter List */}
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
        </div>
        {/* Tab 2 end  */}
      </div>
      {/* Tab item end  */}
    </div>
  );
};

export default HadisList;
