import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "citizen",
  });

  const [isAdminOrOfficals, setIsAdminOrOfficals] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="py-6 px-4 shadow-md w-full">
        <h2 className="text-center text-xl font-bold mb-6">
          Register yourself!
        </h2>

        {/* are you admin/officals? */}
        <div className="absolute bottom-2 right-2">
          <button
            className="bg-blue-600 p-2 rounded-md text-white font-bold"
            onClick={() => setIsAdminOrOfficals((prev) => !prev)}
          >
            {isAdminOrOfficals ? "Back as citizen" : "admin/officials"}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jhon Doe"
              className="focus:outline-none border-2 border-gray-400 focus:border-blue-400 px-4 py-1 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jhondoe@gmail.com"
              className="focus:outline-none border-2 border-gray-400 focus:border-blue-400 px-4 py-1 rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="******"
              className="focus:outline-none border-2 border-gray-400 focus:border-blue-400 px-4 py-1 rounded-lg"
            />
            {isAdminOrOfficals && (
              <select
                name="role"
                onChange={handleChange}
                value={formData.role}
                className="focus:outline-none border-2 border-gray-400 focus:border-blue-400 px-4 py-1 rounded-lg w-full inline-block"
              >
                <option value="admin">Admin</option>
                <option value="officials">Officials</option>
              </select>
            )}
            <button className="w-full py-2 bg-gray-600 shadow-2xl rounded-lg cursor-pointer">
              Signup with Google!
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 my-4 rounded-lg cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
