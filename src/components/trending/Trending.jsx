import { useMemo } from "react";

import Title from "../title/Title";
import TrendingCard from "../card/TrendingCard";

const Trending = ({ title, listFilm = [] }) => {
  const listFilmTrending = useMemo(() => {
    return [...listFilm]
      .sort((a, b) => {
        const popularityA =
          a.dailyViews * 0.6 + a.weeklyViews * 0.2 + a.rating * 20;
        const popularityB =
          b.dailyViews * 0.6 + b.weeklyViews * 0.2 + b.rating * 20;

        return popularityB - popularityA;
      })
      .slice(0, 10);
  }, [listFilm]);

  return (
    <div className="trending w-full bg-gray-900/50 p-3 rounded-2xl">
      <Title
        text={title}
        isMaxContent={false}
        isUnder={true}
        styleUnder={"dashed"}
      ></Title>

      <div className="trending_card_list">
        {listFilmTrending.map((film, idx) => (
          <TrendingCard
            key={film.id}
            title={film.name}
            totalViews={film.views}
            ranking={idx + 1}
            slug={film.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
