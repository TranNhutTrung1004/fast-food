import { useParams } from "react-router-dom";
import { useMemo } from "react";

import films from "../store/Films.json";
import comments from "../store/comment.json";

import CardDetail from "../components/card/CardDetail";
import Trending from "../components/trending/Trending";
import Ranking from "../components/ranking/Ranking";
import BreadCrumbs from "../components/title/BreadCrumbs";
import Comment from "../components/comment/Comment";

const FilmDetailPage = () => {
  const { slug } = useParams();

  const film = useMemo(() => {
    return films.films.find((f) => f.slug === slug);
  }, [slug]);

  return (
    <div className="film-detail-page w-full md:px-[40px] lg:px-70 py-10">
      <BreadCrumbs
        text="Phim"
        title={`${slug.replace(/-/g, " ")}`}
      ></BreadCrumbs>

      <section className="mt-4 flex gap-5 w-full">

        <div className="w-full md:w-[70%] h-full bg-[#1a1a1a] px-4 py-3">
          <CardDetail film={film}></CardDetail>
          <Comment movieId={film.id} comments={comments.comments}></Comment>
        </div>

        <div className="w-[30%] hidden md:block">
          <Trending title={"trending"} listFilm={films.films}></Trending>
        </div>

      </section>

    </div>
  );
};

export default FilmDetailPage;
