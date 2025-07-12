const Signup = ({ onClose, switchToLogin }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Signup
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <button onClick={switchToLogin} className="text-orange-600 underline">
            Login
          </button>
        </p>

        <button
          onClick={onClose}
          className="block mt-4 mx-auto text-gray-500 hover:text-black"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Signup;
