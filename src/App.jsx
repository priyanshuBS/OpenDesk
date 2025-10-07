import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header className="h-16 flex items-center justify-between px-4 shadow-lg">
        {/* left */}
        <div>
          <h1 className="text-xl font-bold">OpenDesk</h1>
        </div>
        {/* right */}
        <div className="flex items-center gap-4 text-[1rem]">
          <Link
            to="/login"
            className="hover:underline-offset-1 hover:text-green-600"
          >
            Login
          </Link>
          <Link to="/register" className="bg-green-600 px-4 py-1 rounded-md">
            Register
          </Link>
        </div>
      </header>
      <Outlet />
      <footer className="bg-gray-800 text-white text-sm p-4 text-center">
        <p>All rights are reserved @dopriyanshu@gmail.com</p>
      </footer>
    </>
  );
}

export default App;
