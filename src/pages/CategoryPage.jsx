import { useParams } from "react-router-dom";
import { useMemo } from "react";

import films from "../store/Films.json";
import BreadCrumbs from "../components/title/BreadCrumbs";
import Movies from "../components/movies/Movies";
import Trending from "../components/trending/Trending";
import Ranking from "../components/ranking/Ranking";

import style from './page.module.css';

const CategoryPage = () => {
  const { category } = useParams();

  const filteredFilms = useMemo(() => {
    return films.films.filter((film) =>
      film.category.some(
        (cat) => cat.toLowerCase().replace(/\s+/g, "-") === category
      )
    );
  }, [category]);

  return (
    <div className={`${style.pageContainer} w-full md:px-[40px] lg:px-70 py-10`}>
      <BreadCrumbs title={`${category.replace(/-/g, " ")}`}></BreadCrumbs>
      <section className="mt-1 md:mt-4 flex gap-5 w-full">
        {filteredFilms.length > 0 ? (
          <Movies title={""} isSelect={true} listFilm={filteredFilms}></Movies>
        ) : (
          <p className="w-full mt-4 md:w-[70%] md:mt-10 text-center text-gray-400">
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

export default CategoryPage;
