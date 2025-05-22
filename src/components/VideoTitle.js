import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 sm:w-1/2">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black py-4 px-16 text-lg w-10 rounded-lg flex gap-1 justify-center items-center hover:bg-opacity-70 transition duration-200">
            <span><FaPlay /> </span><span>Play</span></button>
        <button className="bg-gray-500 py-4 px-8 text-lg bg-opacity-50 rounded-lg flex gap-1 justify-center items-center"><IoInformationCircleOutline />More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
