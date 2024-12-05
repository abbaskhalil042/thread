const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <div className="flex flex-col bg-slate-800 p-8 rounded-xl w-100  items-center">
        <h1> Create an account </h1>
        <input
          type="text"
          placeholder="username"
          className="border text-white border-black bg-zinc-600 pr-16 p-2 rounded-xl m-2"
        />
        <input
          type="email"
          placeholder="email"
          className="border text-white border-black bg-zinc-600 pr-16 p-2 rounded-xl m-2"
        />
        <input
          type="password"
          placeholder="password"
          className="border text-white border-black bg-zinc-600 pr-16 p-2 rounded-xl m-2"
        />
        <button type="submit" className="bg-black w-40  p-2 rounded-xl m-2">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
