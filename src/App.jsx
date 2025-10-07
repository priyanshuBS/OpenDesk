import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              OpenDesk
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 text-sm sm:text-base">
            <Link
              to="/login"
              className="hover:underline hover:text-green-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}

      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-sm p-4 text-center mt-auto">
        <p>All rights reserved &copy; dopriyanshu@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
