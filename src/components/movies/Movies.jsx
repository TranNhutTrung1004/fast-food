import Title from "../title/Title";
import VideoCard from "../card/VideoCard";
import styles from "./movies.module.css";
import Select from "../select/Select";

const Movies = ({ title, isSelect = false, listFilm = [] }) => {
  return (
    <section className="layout-movies w-full md:w-[70%]">
      {title && (
        <Title
          text={title}
          isMaxContent={true}
          isUnder={true}
          styleUnder={"solid"}
        ></Title>
      )}
      {isSelect && <Select></Select>}

      <div className={`${styles["layout-movies__list"]} grid grid-cols-3 md:grid-cols-4`}>
        {listFilm.map((film) => {
          return (
            <VideoCard
              key={film.id}
              videoImage={film.image}
              videoNameEnglish={film.nameEnglish}
              videoName={film.name}
              istrending={film.isTrending}
              videoDuration={`${film.subType}`}
              slug={film.slug}
              episodes={`Tập ${film.episodesCurrent}/${film.episodes}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
