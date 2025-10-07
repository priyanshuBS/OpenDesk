import {
  HiOutlineExclamationCircle,
  HiOutlineMap,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Report Civic Issues Easily
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Let your voice be heard. Report potholes, broken streetlights,
              garbage, and more directly to your local authorities.
            </p>
            <Link
              href="/report"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              Report an Issue
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Civic Reporting Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use CivicConnect?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
            <HiOutlineExclamationCircle className="mx-auto text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Report Issues Quickly
            </h3>
            <p className="text-gray-600">
              Submit problems like potholes or broken streetlights in just a few
              clicks.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
            <HiOutlineMap className="mx-auto text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Location Based Tracking
            </h3>
            <p className="text-gray-600">
              Automatically share the location of the issue, so authorities know
              exactly where to act.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
            <HiOutlineChatAlt2 className="mx-auto text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-600">
              Track the status of your issues and receive updates directly from
              authorities.
            </p>
          </div>
        </div>
      </section>

      {/* About / Info Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Empowering Citizens, Improving Cities
          </h2>
          <p className="text-gray-700 text-lg">
            CivicConnect bridges the gap between citizens and authorities,
            making it easier for communities to address civic problems
            efficiently and transparently.
          </p>
        </div>
      </section>
    </div>
  );
}
