

const Home = () => {
  return (
    <main>

<div className="max-w-xl mx-auto flex space-x-3 p-4 border-b border-gray-200">
      {/* Left Vertical Line */}
      <div className="w-1 bg-gray-300 rounded-full"></div>

      {/* Post Content */}
      <div className="flex-1">
        {/* User Info */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <img
              className="w-10 h-10 rounded-full"
              src="https://via.placeholder.com/40"
              alt="Avatar"
            />
            <div>
              <p className="font-semibold text-sm text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>

        {/* Post Text */}
        <p className="text-sm text-gray-800 mb-3">
          This is a sample thread post! Styling with Tailwind CSS makes it easy
          to replicate a Threads-like UI.
        </p>

        {/* Fake Post Image */}
        <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Post"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mt-3 text-gray-600 text-sm">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 9l6 6m0 0l-6 6m6-6H3"
              />
            </svg>
            <span>Reply</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7l-4 4m0 0l4 4m-4-4h18"
              />
            </svg>
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
      
    </main>
  )
}

export default Home