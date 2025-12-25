import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

import films from "../store/Films.json";
import BreadCrumbs from "../components/title/BreadCrumbs";
import Movies from "../components/movies/Movies";
import Trending from "../components/trending/Trending";
import Ranking from "../components/ranking/Ranking";

const FilterPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || null;
  const year = searchParams.get('year') || null;
  const country = searchParams.get('country') || null;
  const sort = searchParams.get('order') || null;

  const filteredFilms = useMemo(() => {
    // Normalize params một lần
    const normalizedCategory = category?.toLowerCase();
    const normalizedCountry = country?.toLowerCase().replace(/\s+/g, "-");
    
    // Filter tất cả conditions trong 1 pass
    const filtered = films.films.filter((film) => {
      // Filter category
      if (category) {
        const hasCategory = film.category.some(cat => 
          cat.toLowerCase().replace(/\s+/g, "-") === normalizedCategory
        );
        if (!hasCategory) return false;
      }

      // Filter year
      if (year && film.year.toString() !== year) {
        return false;
      }

      // Filter country
      if (country) {
        const filmCountry = film.country.toLowerCase().replace(/\s+/g, "-");
        if (filmCountry !== normalizedCountry) return false;
      }

      return true;
    });

    // Sort nếu cần (không mutate vì filter đã tạo array mới)
    if (!sort) return filtered;

    return filtered.sort((a, b) => {
      switch(sort) {
        case 'year':
          return b.year - a.year;
        case 'views':
          return b.views - a.views;
        case 'name':
          return a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' });
        case 'date':
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        default:
          return 0;
      }
    });
  }, [category, year, country, sort]);

  return (
    <div className="w-full md:px-[40px] lg:px-70 py-10">
      <BreadCrumbs text="Motphim" title={`lọc phim`}></BreadCrumbs>
      <section className="mt-4 flex gap-5 w-full">
        {filteredFilms.length > 0 ? (
          <Movies title={""} isSelect={true} listFilm={filteredFilms}></Movies>
        ) : (
          <p className="w-[70%] text-center text-gray-400 mt-10">
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

export default FilterPage;
