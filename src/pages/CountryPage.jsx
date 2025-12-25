import { useParams } from "react-router-dom";
import { useMemo } from "react";

import films from "../store/Films.json";
import Movies from "../components/movies/Movies";
import Trending from "../components/trending/Trending";
import Ranking from "../components/ranking/Ranking";
import BreadCrumbs from "../components/title/BreadCrumbs";

const CountryPage = () => {
  const { country } = useParams();

  const filteredFilms = useMemo(() => {
    return films.films.filter(
      (film) => film.country.toLowerCase().replace(/\s+/g, "-") === country
    );
  }, [country]);

  return (
    <div className="w-full md:px-[40px] lg:px-70 py-10">
      <BreadCrumbs title={`${country.replace(/-/g, " ")}`}></BreadCrumbs>
      <section className="mt-4 flex gap-5 w-full">
        {filteredFilms.length > 0 ? (
          <Movies title={""} isSelect={true} listFilm={filteredFilms}></Movies>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            Không tìm thấy phim trong thể loại này
          </p>
        )}
        <div className="w-[30%] hidden md:block">
          <Trending title={"trending"} listFilm={films.films}></Trending>
          <Ranking title={"ranking"} listFilm={films.films}></Ranking>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;
