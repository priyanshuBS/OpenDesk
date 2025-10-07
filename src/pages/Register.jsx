import { useState } from "react";
import { loginWithGoogle, registerWithEmail } from "../firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "citizen",
  });

  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();

  console.log(user);
  console.log(isLoggedIn);

  const [isAdminOrOfficals, setIsAdminOrOfficals] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await registerWithEmail(formData);
  };

  const handleGoogleSignup = async () => {
    await loginWithGoogle();
  };

  if (isLoggedIn) {
    navigate("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Register Yourself
        </h2>

        <div className="absolute bottom-6 right-6">
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
            onClick={() => setIsAdminOrOfficals((prev) => !prev)}
          >
            {isAdminOrOfficals ? "Back as Citizen" : "Admin/Officials"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isAdminOrOfficals && (
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {isAdminOrOfficals && (
            <select
              name="role"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.role}
            >
              <option value="admin">Admin</option>
              <option value="officials">Officials</option>
            </select>
          )}

          <button
            type="button"
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
            onClick={handleGoogleSignup}
          >
            Signup with Google
          </button>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
