import { Link } from "react-router-dom";
import { HomeIcon } from "../assets/icons";
import main from "../assets/main.svg";

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12">
      <nav className="fixed top-0 left-0 p-4">
        <HomeIcon />
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            Record<span className="text-blue-500">Hub</span>
          </h1>
          <p className="text-gray-700">
            <p>
              RecordHub is a user-friendly platform for screen and webcam
              recording. Create tutorials, presentations, and more with ease.
            </p>
            <br />
            <h3>
              <strong>Technologies Used:</strong>
            </h3>
            <ul>
              <li>
                <strong>React:</strong> For building the frontend.
              </li>
              <li>
                <strong>Node:</strong> For building the backend.
              </li>
              <li>
                <strong>Express:</strong> For building backend server.
              </li>
              <li>
                <strong>Mongo DB:</strong> Store user information.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Used for styling.
              </li>
              <li>
                <strong>React Media Recorder:</strong> Library used for
                recording screen and webcam footage.
              </li>
              <li>
                <strong>React Router:</strong> For navigation between different
                pages
              </li>
            </ul>
          </p>
          <div className="mt-4">
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-4 transition duration-300"
            >
              Login Page
            </Link>
            <Link
              to="/register"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition duration-300"
            >
              Register Page
            </Link>
          </div>
        </div>
        <img
          src={main}
          alt="surveillance"
          className="w-full md:max-w-xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Landing;
