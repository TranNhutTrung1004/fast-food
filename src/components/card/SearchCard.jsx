import { Link } from "react-router-dom";

const SearchCard = ({ imgUrl, name, duration, slug }) => {
  return (
    <Link
      to={`/phim/${slug}`}
      className="search-card-items flex gap-3 text-white no-underline p-2"
    >
      <div className="w-full flex justify-between items-center">
        <div className="w-[40%] h-full">
          <img src={`/src/assets/images/films/${imgUrl}`} className="w-full h-full" alt={name} />
        </div>
        <div className="w-[60%] h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-[13px]">{name}</h3>
          <p className="text-[12px] opacity-70">{duration}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
