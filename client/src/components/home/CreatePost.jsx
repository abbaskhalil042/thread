import { User2Icon } from "lucide-react";

const CreatePost = () => {
  return (
    <div className="flex   justify-between rounded-xl w-full  items-center">
      <div className="flex justify-center items-center">
        <User2Icon />

        <input
          type="text "
          placeholder="Create Post"
          className="border-b-[1px] text-white  border-white bg-transparent w-[50rem] p-2 rounded-xl m-2 shadow-gray-700 shadow-2xl outline-[1px]"
        />
      </div>
      <div>
        <button className="bg-black w-28  p-2 rounded-xl m-2">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
