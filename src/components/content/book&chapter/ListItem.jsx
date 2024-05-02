import PolygonShape from "./PolygonShape";

const ListItem = () => {
  return (
    <div className="flex items-center gap-4 hover:bg-green-100 transition duration-200 p-4 rounded-lg cursor-pointer">
      <PolygonShape text="M" />
      <div className="noto-sans-bengali">
        <h1 className="text-md text-black pb-3">ওহীর সূচনা অধ্যায়</h1>

        <p className="text-sm text-slate-500 ">সর্বমোট হাদিস - 7563</p>
      </div>
      <div className="noto-sans-bengali">
        <h1 className="text-md text-black pb-3">ঈমান</h1>

        <p className="text-sm text-slate-500 ">সর্বমোট হাদিস - 7563</p>
      </div>
    </div>
  );
};

export default ListItem;
