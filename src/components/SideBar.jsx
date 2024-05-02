import { GoHome } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { TbBooks } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";


const SideBar = () => {
  return (
    <div className="flex justify-center items-center bg-slate-100 md:bg-transparent py-2 md:py-0">
    <div className="md:pt-32">
      <ul className="flex md:block gap-2 md:gap-10 ">
        <li className=" hover:bg-green-600 p-4 rounded-xl hover:text-white">
          <a className="">
            <GoHome  size={30} className="text-slate-600 hover:text-white" />
          </a>
        </li>

        <li className="md:mt-7 bg-green-600 p-4 rounded-xl hover:text-white">
          <a className="md:pt-10">
            <TbBooks
                size={30}
              className="text-white"
            />
          </a>
        </li>

        <li className="md:mt-7 hover:bg-green-600 p-4 rounded-xl hover:text-white">
          <a className="md:pt-10">
            <FiBookOpen
                size={30}
                className="text-slate-600 hover:text-white"
            />
          </a>
        </li>
        <li className="md:mt-7 hover:bg-green-600 p-4 rounded-xl hover:text-white">
          <a className="md:pt-10">
            <IoBookmarkOutline
              size={30}
              className="text-slate-600 hover:text-white"
            />
          </a>
        </li>
        <li className="md:mt-7 hover:bg-green-600 p-4 rounded-xl hover:text-white">
          <a className="md:pt-10">
            <IoPaperPlaneOutline
              size={30}
              className="text-slate-600 hover:text-white"
            />
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default SideBar;
