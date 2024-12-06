import {
  Heart,
  MessageCircle,
  MoreVertical,
  Repeat2,
  Send,
} from "lucide-react";

const Post = () => {
  return (
    <section className="bg-slate-800 w-[70%] m-auto p-10  rounded-lg relative">
      <div className="absolute top-24 left-14 w-[1px] h-[30rem] bg-slate-300 "></div>
      <div className="flex justify-between">
        <div className="flex items-center justify-between mb-5">
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="ml-3">
            <h1 className="font-bold text-lg">User name</h1>
            <p className="text-sm">Title Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="flex justify-items-end gap-5">
          <p>1 day</p>
          <MoreVertical />
        </div>
      </div>
      <div className="ml-16">
        <img
          className="w-[35rem]  rounded-sm"
          src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="flex flex-col gap-5 mt-2">
          <div className="flex gap-5">
            <span className="flex gap-1">
              <Heart /> 23
            </span>
            <span className="flex gap-1">
              <MessageCircle /> 23
            </span>
            <span className="flex gap-1">
              <Repeat2 />
              20
            </span>
            <Send />
          </div>
        </div>
      </div>
      <div className="flex mt-8 ">
        <img
          className="w-[2.5rem] h-[2.5rem] relative rounded-full"
          src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="absolute left-16  w-[2.5rem] h-[2.5rem]  rounded-full"
          src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="absolute left-20 w-[2.5rem] h-[2.5rem]  rounded-full"
          src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </section>
  );
};

export default Post;
