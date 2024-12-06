import { Search } from "lucide-react";

const FindUser = () => {
  return (
    <div className="flex gap-2 w-[50%] m-auto relative mt-5">
      <Search className="w-5 h-4 absolute top-5 left-4" />
      <input
        type="text"
        placeholder="Search users..."
        className="p-2 w-full  text-black bg-transparent border rounded-xl m-2 outline-[1px]shadow-gray-700 shadow-2xl pl-8"
      />
    </div>
  );
};

export default FindUser;
