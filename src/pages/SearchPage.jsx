import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

import films from "../store/Films.json";
import Movies from "../components/movies/Movies";
import Trending from "../components/trending/Trending";
import Ranking from "../components/ranking/Ranking";
import BreadCrumbs from "../components/title/BreadCrumbs";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const searchResults = useMemo(() => {
    if (!query) return [];
    
    const lowerQuery = query.toLowerCase();
    return films.films.filter((film) => 
      film.name.toLowerCase().includes(lowerQuery) ||
      film.nameEnglish.toLowerCase().includes(lowerQuery) ||
      film.slug.includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="w-full md:px-[40px] lg:px-70 py-10">
      <BreadCrumbs text="Tìm kiếm" title={`${query}`}></BreadCrumbs>
      <section className="mt-4 flex gap-5 w-full">
        {searchResults.length > 0 ? (
          <Movies title={""} isSelect={true} listFilm={searchResults}></Movies>
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

export default SearchPage;
