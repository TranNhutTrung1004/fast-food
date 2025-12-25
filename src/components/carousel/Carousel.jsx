import { useState, useMemo, useEffect, useRef } from "react";

import VideoCard from "../card/VideoCard.jsx";
import Title from "../title/Title.jsx";

import style from "./carousel.module.css";

const Carousel = ({ title, listFilm = [], itemsPerPage = 4 }) => {
  const interval = useRef(null);
  const timeoutRef = useRef(null); // Lưu timeout ID
  // Thêm state để track animation
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");

  // Preparing list of films for carousel
  const listFilmCarousel = useMemo(() => {
    return [...listFilm]
      .filter((film) => film.isTrending)
      .sort((filmA, filmB) => filmB.weeklyViews - filmA.weeklyViews)
      .slice(0, 10);
  }, [listFilm]);

  // Carousel pagination setup
  const pages = Math.floor(listFilmCarousel.length / itemsPerPage); // 2 pages
  const [pageIndex, setPageIndex] = useState(0);

  // slicing carousel automatically
  useEffect(() => {
    interval.current = setInterval(() => {
      setIsAnimating(true);
      setSlideDirection("right");
      timeoutRef.current = setTimeout(() => {
        setPageIndex((p) => (p === pages - 1 ? 0 : p + 1));
        setSlideDirection("");
        setIsAnimating(false);
      }, 200);
    }, 3000); // Auto chuyển mỗi 3 giây

    return () => {
      clearInterval(interval.current);
      clearTimeout(timeoutRef.current);
    };
  }, [pages]);

  // Handlers for slicing carousel pages
  const handleSlicePrev = () => {
    if (isAnimating) return;
    
    // Clear timeout cũ và reset autoplay
    clearTimeout(timeoutRef.current);
    clearInterval(interval.current);
    
    setIsAnimating(true);
    setSlideDirection("left");
    timeoutRef.current = setTimeout(() => {
      setPageIndex((p) => (p === 0 ? pages - 1 : p - 1));
      setSlideDirection("");
      setIsAnimating(false);
      
      // Restart autoplay sau khi animation xong
      interval.current = setInterval(() => {
        handleSliceNext();
      }, 3000);
    }, 200);
  };
  const handleSliceNext = () => {
    if (isAnimating) return;
    
    // Clear timeout cũ và reset autoplay
    clearTimeout(timeoutRef.current);
    clearInterval(interval.current);
    
    setIsAnimating(true);
    setSlideDirection("right");
    timeoutRef.current = setTimeout(() => {
      setPageIndex((p) => (p === pages - 1 ? 0 : p + 1));
      setSlideDirection("");
      setIsAnimating(false);
      
      // Restart autoplay sau khi animation xong
      interval.current = setInterval(() => {
        handleSliceNext();
      }, 3000);
    }, 200);
  };

  return (
    <section className="carousel">
      <Title text={title} isUnder={false}></Title>

      <div className={`${style.carousel__viewport} relative`}>
        <div className={`${style.carousel__track}`}>
          <div
            className={`${style.carousel__page} ${
              slideDirection ? style[`slide-${slideDirection}`] : ""
            } h-[130px] md:h-[240px] lg:h-[320px] flex justify-between items-center gap-4 `}
            key={pageIndex}
          >
            {listFilmCarousel
              .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
              .map((film) => (
                <VideoCard
                  key={film.id}
                  videoImage={film.image}
                  videoNameEnglish={film.nameEnglish}
                  videoName={film.name}
                  istrending={film.isTrending}
                  videoDuration={film.subType}
                  slug={film.slug}
                />
              ))}
          </div>
        </div>

        {/* Slice buttons */}
        <button
          onClick={handleSlicePrev}
          className="btn-slice-left absolute w-[5%] p-3 left-0 top-[50%] translate-y-[-50%] flex justify-center items-center bg-lighter-black cursor-pointer"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <button
          onClick={handleSliceNext}
          className="btn-slice-right absolute w-[5%] p-3 right-0 top-[50%] translate-y-[-50%] flex justify-center items-center bg-lighter-black cursor-pointer"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
