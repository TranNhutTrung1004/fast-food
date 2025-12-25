// Importing necessary components
import Advert from "../components/advert/Advert";
import Carousel from "../components/carousel/Carousel";
import Banner from "../components/banner/Banner";
import Movies from "../components/movies/Movies";
import Trending from "../components/trending/Trending"
import Ranking from "../components/ranking/Ranking";

import style from './page.module.css';

// Importing film data
import films from "../store/Films.json";

const IndexPage = () => {
    return (
        <>
            <section className={`${style.pageContainer} w-full md:px-[40px] lg:px-70 py-10`}>
                <Advert></Advert>
                <Carousel
                    title={"Phim Đề Cử"}
                    listFilm={films.films}
                ></Carousel>
                {/* <Banner
                    imgUrl={"/src/assets/images/banner/banner-rophim.gif"}
                    alt={"Rạp Phim Banner"}
                ></Banner> */}

                <section className="mt-10 flex gap-5 w-full">
                    <Movies
                        title={"phim mới cập nhật"}
                        isNewFilms={true}
                        listFilm={films.films}
                    ></Movies>

                    <div className="w-[30%] hidden md:block">
                        <Trending
                            title={"Trending"}
                            listFilm={films.films}
                        ></Trending>
                        <div className="trending-banner mt-4">
                            <img src="/src/assets/images/banner/bannerrobong.gif" alt="banner" className="w-full" />
                        </div>
                        <Ranking
                            title={"Ranking"}
                            listFilm={films.films}
                        ></Ranking>
                    </div>
                </section>               
            </section>
        </>
    )
}

export default IndexPage;