import { Link } from "react-router-dom";
import { getAssetUrl } from "../../utils/assetResolver";

const RankingCard = ({
  ranking,
  imgUrl,
  duration,
  nameEnglish,
  name,
  slug,
  alt = "ranking card image",
}) => {

  // Convert rating from 10-point scale to 5-star scale
  const starRating = (ranking / 5) * 5; // 8.8 -> 4.4 stars
  const fullStars = Math.floor(starRating);
  const partialStarPercent = ((starRating % 1) * 100).toFixed(2);
  const emptyStars = 5 - Math.ceil(starRating);

  const imageUrl = getAssetUrl(`images/films/${imgUrl}`);

  return (
    <Link
      to={`/phim/${slug}`}
      className={`text-white font-bold w-full flex gap-4 mb-4 items-center justify-between cursor-pointer hover:text-amber-300`}
    >
      <div className={`w-[40%]`}>
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-[106px] object-fill"
        />
      </div>
      <div
        className={`w-[60%] text-[14px] flex flex-col justify-between gap-1`}
      >
        <h3 className={``}>{name}</h3>
        <p className={`text-[13px] opacity-65 font-normal`}>{nameEnglish}</p>
        <p
          className={`w-max px-1 py-2 mt-1 text-[12px] rounded text-white opacity-65 font-normal bg-[#555555]`}
        >
          {duration}
        </p>
        <p className={`flex items-center mt-1`}>
          {/* Full stars */}
          {Array.from({ length: fullStars }, (_, i) => (
            <i key={`full-${i}`} className="fa-solid fa-star text-amber-200 border-none mr-1"></i>
          ))}
          {/* Partial star with exact percentage */}
          {partialStarPercent > 0 && (
            <span className="relative inline-block mr-1">
              <i className="fa-regular fa-star text-amber-200 border-none"></i>
              <span 
                className="absolute top-0 left-0 overflow-hidden" 
                style={{ width: `${partialStarPercent}%` }}
              >
                <i className="fa-solid fa-star text-amber-200 border-none"></i>
              </span>
            </span>
          )}
          {/* Empty stars */}
          {Array.from({ length: emptyStars }, (_, i) => (
            <i key={`empty-${i}`} className="fa-regular fa-star border-none mr-1"></i>
          ))}
          {ranking}
        </p>
      </div>
    </Link>
  );
};

export default RankingCard;