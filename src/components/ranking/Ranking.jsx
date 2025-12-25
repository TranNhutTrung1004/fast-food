import { useMemo } from "react";

import Title from "../title/Title";
import RankingCard from "../card/RankingCard";

const Ranking = ({ title, listFilm = [] }) => {

  const listFilmRanking = useMemo(() => {
    return [...listFilm]
      .sort((a, b) => {
        return b.rating - a.rating;
      })
      .slice(0, 10);
  }, [listFilm]);

  return (
    <div className="w-full mt-10 bg-gray-900/50 p-3 rounded-2xl">
      <Title 
        text={title} 
        isMaxContent={false}
        isUnder={true} 
        styleUnder={"dashed"}
      />

      <div className="">
        {listFilmRanking.map((film) => (
          <RankingCard
            key={film.id}
            ranking={film.rating}
            imgUrl={film.image}
            totalViews={film.views}
            duration={film.subType}
            nameEnglish={film.nameEnglish}
            name={film.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Ranking;
