import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState("threads");

  return (
    <section className="p-6 min-h-screen bg-[radial-gradient(circle, #FDE8A9, #F8AFA6)]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-300">
        {/* User Info Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Username</h1>
          <h4 className="text-gray-600">@username_132</h4>
          <p className="mt-2 text-gray-700">A passionate coder and designer!</p>

          {/* Followers Section */}
          <div className="flex items-center gap-4 mt-4">
            <div className="relative flex items-center">
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Follower 1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg -ml-3"
                src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Follower 2"
              />
            </div>
            <span className="text-sm text-gray-800 font-medium">
              2 followers
            </span>
          </div>
        </div>

        {/* Profile Image */}
        <div>
          <img
            className="w-14 h-14 rounded-full border-4 border-gray-300 shadow-md"
            src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
          />
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="mb-6">
        <button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 rounded-md shadow-md hover:opacity-90">
          Edit Profile
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-around text-gray-800 font-semibold border-b border-gray-300 pb-2 mb-4">
        <Link
          to="/profile/threads/1"
          onClick={() => setActiveTab("threads")}
          className={`transition duration-300 ${
            activeTab === "threads" ? "text-pink-600 font-bold" : "hover:text-pink-600"
          }`}
        >
          Threads
        </Link>
        <Link
          to="/profile/respost/1"
          onClick={() => setActiveTab("respost")}
          className={`transition duration-300 ${
            activeTab === "respost" ? "text-pink-600 font-bold" : "hover:text-pink-600"
          }`}
        >
          Reposts
        </Link>
        <Link
          to="/profile/replies/1"
          onClick={() => setActiveTab("replies")}
          className={`transition duration-300 ${
            activeTab === "replies" ? "text-pink-600 font-bold" : "hover:text-pink-600"
          }`}
        >
          Replies
        </Link>
      </div>

      {/* Content Section */}
      <Outlet />
    </section>
  );
};

export default ProfileLayout;
