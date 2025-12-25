import { useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

import SearchCard from "../card/SearchCard";
import films from "../../store/Films.json";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const filteredFilms = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const lowerQuery = searchQuery.toLowerCase();
    return films.films
      .filter(
        (film) =>
          film.name.toLowerCase().includes(lowerQuery) ||
          film.nameEnglish.toLowerCase().includes(lowerQuery) ||
          film.slug.includes(lowerQuery)
      )
      .slice(0, 5);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsFocused(false);
    }
  };

  const handleBlur = () => {
    // Delay để click vào SearchCard kịp trigger trước
    setTimeout(() => setIsFocused(false), 200);
  };

  return (
    <div className="relative flex flex-col w-full" ref={searchRef}>
      <form
        onSubmit={handleSearch}
        className="header-search w-full border-1 rounded-lg flex justify-evenly items-center px-2 py-1 bg-white text-black"
      >
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          autoComplete="off"
          className="border-none outline-none w-[80%] "
          placeholder="Nhập tên phim bạn muốn tìm kiếm..."
        />
        <button type="submit" className="btn-search w-[20%] cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {searchQuery.trim() && isFocused && filteredFilms.length > 0 && (
        <div className="z-10 absolute top-full left-0 w-full flex flex-col gap-2 bg-black p-2 rounded-b-lg shadow-lg">
          {filteredFilms.map((film) => (
            <SearchCard
              key={film.id}
              imgUrl={film.image}
              name={film.name}
              duration={`${film.episodesCurrent} ${film.subType}`}
              slug={film.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
