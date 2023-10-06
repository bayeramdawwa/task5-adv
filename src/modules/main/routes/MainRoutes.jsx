import { ROUTES } from "../constans/const";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Main from "../pages/Main";
import News from "../pages/News";
import Courses from "../pages/Coursespage";

export const MainRoutes = [
  {
    path: ROUTES.Main,
    element: <Main />,
    children: [
      {
      path: ROUTES.Homepage,
      element: <Homepage />,
    },
      {
      path: ROUTES.About,
      element: <About />,
    },
    {
      path: ROUTES.Courses,
      element: <Courses />,
    },
      {
      path: ROUTES.News,
      element: <News />,
    }
     ],
  },
];
