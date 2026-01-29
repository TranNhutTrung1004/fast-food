import { Link } from "react-router";
import { getAssetUrl } from "../../utils/assetResolver";

import style from "./card.module.css";
import CardDetailItem from "./CardDetailItem";
import CardDetailList from "./CardDetailList";

const CardDetail = ({ film }) => {
  // Convert rating from 10-point scale to 5-star scale
  const starRating = (film.rating / 5) * 10; // 8.8 -> 4.4 stars
  const fullStars = Math.floor(starRating);
  const partialStarPercent = ((starRating % 1) * 100).toFixed(2);
  const emptyStars = 5 - Math.ceil(starRating);

  const imageUrl = getAssetUrl(`images/films/${film.image}`);

  return (
    <section className="w-full mb-10">
      <div className="card-movie-detail w-full p-2 flex items-start gap-5 text-[#bbb] h-[390px] md:h-[450px] mb-5">
        <Link to={"#"} className="w-[50%] md:w-[45%] h-full">
          <div className={`${style["card-detail-left"]} relative h-full`}>
            <img
              src={imageUrl}
              alt={film.name}
              className={`${style["card-detail-img"]} h-[380px] md:h-full object-cover`}
              loading="lazy"
            />
            <button className={`${style["btn-icon"]} capitalize`}>
              <i className="fa-solid fa-play"></i>
            </button>
            <div
              className={`${style["card-detail-btn"]} absolute w-full flex justify-center`}
            >
              <button
                className={`${style["btn-watch"]} text-[10px] md:text-[14px] px-3 py-2 capitalize hover:bg-amber-600`}
              >
                <i className="mr-1 fa-solid fa-play"></i>
                Xem phim
              </button>
            </div>
          </div>
        </Link>

        <div className="card-detail-right w-[50%] h-full md:w-[55%] flex flex-col justify-between">
          <div className="w-full h-[80%] flex flex-col justify-between">
            <div className="h-[20%]">
              <h3 className="text-[12px] md:text-[18px] text-red-400 uppercase font-bold mt-2">
                {film.name}
              </h3>
              <p className="text-[10px] md:text-[13px] opacity-70 capitalize mt-2">
                {film.nameEnglish} {film.year}
              </p>
            </div>
            <CardDetailList>
              <CardDetailItem
                title="Trạng thái"
                value={`Tập ${film.episodesCurrent} ${film.subType}`}
                isOptional={1}
              />
              <CardDetailItem title="Thời lượng" value={film.duration} />
              <CardDetailItem title="Số tập" value={`${film.episodes} Tập`} />
              <CardDetailItem
                title="Tình trạng"
                value={film.status ? "Hoàn thành" : "Đang chiếu"}
                isOptional={1}
              />
              <CardDetailItem title="Ngôn ngữ" value={film.subType} />
              <CardDetailItem title="Năm sản xuất" value={film.year} />
              <CardDetailItem title="Quốc gia" value={film.country} />
              <CardDetailItem title="Thể loại" value={film.category.join(", ")} />
              <CardDetailItem title="Diễn viên" value={film.artist} />
            </CardDetailList>
          </div>

          <p
            className={`w-full h-[15%] flex items-center justify-center text-[6px] md:text-[14px] bg-[#282828]`}
          >
            {/* Full stars */}
            {Array.from({ length: fullStars }, (_, i) => (
              <i
                key={`full-${i}`}
                className="fa-solid fa-star text-amber-200 border-none mr-1"
              ></i>
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
              <i
                key={`empty-${i}`}
                className="fa-regular fa-star border-none mr-1"
              ></i>
            ))}
            {`( ${starRating} / ${film.views} )`}
          </p>
        </div>
      </div>

      <div className="w-full bg-[#282828] p-3">
        <h4 className="w-max text-[10px] md:text-[14px] text-red-400 border-b border-b-red-400 uppercase">Nội dung phim - {film.name}</h4>
        <p className="text-[8px] md:text-[12px] mt-2 text-justify leading-5 md:leading-7">
          {film.description}
        </p>
      </div>
    </section>
  );
};

export default CardDetail;
