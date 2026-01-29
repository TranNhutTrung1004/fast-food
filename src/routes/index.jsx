import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import IndexPage from "../pages/IndexPage";
import FilmDetailPage from "../pages/FilmDetailPage";
import CategoryPage from "../pages/CategoryPage";
import CountryPage from "../pages/CountryPage";
import YearPage from "../pages/YearPage";
import SearchPage from "../pages/SearchPage";
import NotFoundPage from "../pages/NotFoundPage";
import FilterPage from "../pages/FilterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: "phim/:slug",
        element: <FilmDetailPage />
      },
      {
        path: "the-loai/:category",
        element: <CategoryPage />
      },
      {
        path: "quoc-gia/:country",
        element: <CountryPage />
      },
      {
        path: "nam/:year",
        element: <YearPage />
      },
      {
        path: "tim-kiem",
        element: <SearchPage />
      },
      {
        path: "loc-phim",
        element: <FilterPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
], {
  basename: "/fast-food"
});
