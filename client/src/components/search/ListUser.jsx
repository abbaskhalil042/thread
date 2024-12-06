const ListUser = () => {
  return (
    <div className="flex items-center justify-between gap-4 max-w-lg mx-auto mt-5 p-4 border shadow-md rounded-md bg-white">
      {/* Profile Image */}
      <img
        className="w-12 h-12 rounded-full border-2 border-gray-300"
        src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="User Avatar"
      />

      {/* User Details */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800">Abbas</h1>
        <p className="text-sm text-gray-600">Bio: Coding HTML, CSS, JS</p>
        <p className="text-sm text-gray-500">47.3K followers</p>
      </div>

      {/* Follow Button */}
      <button className="bg-black text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition-all">
        Follow
      </button>
    </div>
  );
};

export default ListUser;
