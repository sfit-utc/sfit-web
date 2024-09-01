import DefaultLayout from "../components/Layout/DefaultLayout";
import HomeLayout from "../components/Layout/HomeLayout";

import Board from "../pages/Board/Board";
import Activity from "../pages/Activity/Activity";
import Training from "../pages/Training/Training";
import LandingPage from "../pages/Home/LandingPage";

const publicRoutes = [
  { path: "/", component: LandingPage, layout: HomeLayout },
  { path: "/board", component: Board, layout: DefaultLayout },
  { path: "/activity", component: Activity, layout: DefaultLayout },
  { path: "/training", component: Training, layout: DefaultLayout },
];

export default publicRoutes;
