import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark,CiShare2  } from "react-icons/ci";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";

const Features = () => {
  return (
    <div className="flex justify-center md:justify-between items-center">
      <div>
        <h1 className="noto-sans-bengali hidden md:block">হাদিসের মান : <span className="bg-[#46B891] px-3 py-1 rounded-lg text-white cursor-pointer">সহিহ হাদিস</span></h1>
      </div>
      <div className="flex gap-10 text-slate-600">
        <button>
            <IoCopyOutline size={22}/>
        </button>
        <button>
            <CiBookmark size={22}/>
        </button>
        <button>
            <CiShare2 size={22}/>
        </button>
        <button>
            <MdOutlineReportGmailerrorred size={22}/>
        </button>
        <button>
            <GoLinkExternal size={22}/>
        </button>
      </div>
    </div>
  );
};

export default Features;
