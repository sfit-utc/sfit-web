import DefaultLayout from "../components/Layout/DefaultLayout";
import HomeLayout from "../components/Layout/HomeLayout";

import Home from "../pages/Home/Home";
import Board from "../pages/Board/Board";
import Activity from "../pages/Activity/Activity";
import Training from "../pages/Training/Training";

const publicRoutes = [
  { path: "/", component: Home, layout: HomeLayout },
  { path: "/board", component: Board, layout: DefaultLayout },
  { path: "/activity", component: Activity, layout: DefaultLayout },
  { path: "/training", component: Training, layout: DefaultLayout },
];

export default publicRoutes;
