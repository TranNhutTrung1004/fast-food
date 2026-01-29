import { Link } from "react-router-dom";

const VideoCard = ({
  videoImage,
  videoNameEnglish,
  videoName,
  istrending,
  videoDuration,
  episodes,
  slug,
}) => {
  const linkPath = `phim/${slug}`;

  return (
    <Link
      to={linkPath}
      className="video-card-items relative h-full block no-underline overflow-hidden cursor-pointer"
    >
      <div className="video-card-img h-full w-full">
        <img
          src={`../../assets/images/${videoImage}`}
          alt={videoName}
          loading="lazy"
          className="w-full h-full hover:scale-150 ease-in-out duration-300"
        />
        <span className="video-card-duration w-max text-[4px] md:text-[9px] absolute py-0.5 px-2.5 rounded-2xl text-center bg-green-600 left-1 top-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {videoDuration}
        </span>
        {istrending && (
          <span className="w-max text-[7px] md:text-[9px] video-card-quality absolute  py-0.5 px-1.5 border rounded-2xl text-center bg-amber-400 text-black right-1 top-2">
            {"Trending"}
          </span>
        )}
        { episodes && (
          <span className="video-card-episodes w-max text-[4px] md:text-[9px] absolute py-0.5 px-2.5 rounded-2xl text-center bg-black/60 left-1 bottom-[32%] overflow-hidden whitespace-nowrap text-ellipsis">
            {episodes}
          </span>
        )}
      </div>

      <div className="video-card-content h-[30%] py-2 px-1 absolute bottom-[0%] left-0 right-0 md:py-4 bg-lighter-black text-center">
        <div className="video-card-name mx-auto w-[90%] text-[14px]">
          <h3 className="text-[10px] md:text-[14px] video-card-name font-bold capitalize whitespace-nowrap overflow-hidden text-ellipsis">
            {videoName}
          </h3>
          <h4 className="text-[10px] md:text-[14px] video-card-name-english capitalize text-gray-100 opacity-65 whitespace-nowrap overflow-hidden text-ellipsis">
            {videoNameEnglish}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
