import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] sm:pt-[15%] px-6 sm:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-4 sm:py-6 text-sm sm:text-base lg:text-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        {overview}
      </p>
      <div className="flex sm:flex-row gap-3 sm:gap-4 py-4">
        <button className="bg-white text-black py-3 px-6 sm:py-4 sm:px-10 text-sm sm:text-lg rounded-lg flex gap-2 justify-center items-center hover:bg-opacity-70 transition duration-200">
          <FaPlay />
          <span>Play</span>
        </button>
        <button className="bg-gray-500 bg-opacity-50 py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-lg rounded-lg flex gap-2 justify-center items-center hover:bg-opacity-70 transition duration-200">
          <IoInformationCircleOutline />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
