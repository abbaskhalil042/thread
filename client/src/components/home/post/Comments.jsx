
const Comments = () => {
  const comments = [
    {
      id: 1,
      avatar:
        "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "John Doe",
      comment: "This is such an amazing post! Thank you for sharing.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      avatar:
        "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jane Smith",
      comment: "Great insights! I completely agree with your point.",
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 mb-6 p-4 bg-white rounded-md shadow-sm"
        >
          {/* Avatar */}
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={comment.avatar}
            alt={`${comment.name}'s avatar`}
          />

          {/* Comment Content */}
          <div className="flex-1">
            {/* Name and Timestamp */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">{comment.name}</h3>
              <span className="text-sm text-gray-500">{comment.timestamp}</span>
            </div>

            {/* Comment Text */}
            <p className="text-gray-700">{comment.comment}</p>

            {/* Reply Button */}
            <button className="mt-2 text-pink-600 font-medium hover:underline">
              Reply
            </button>
          </div>
        </div>
      ))}

      {/* Add New Comment Section */}
      <div className="mt-6">
        <textarea
          className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
          rows="4"
          placeholder="Add a comment..."
        ></textarea>
        <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
