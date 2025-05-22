import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-gray-500 text-black py-4 px-16 text-lg w-10 bg-opacity-50 rounded-lg flex gap-1 justify-center items-center">
            <span><FaPlay /> </span><span>Play</span></button>
        <button className="bg-gray-500 text-black py-4 px-8 text-lg bg-opacity-50 rounded-lg flex gap-1 justify-center items-center">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
