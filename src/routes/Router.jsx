import App from "./../App";
import { MainRoutes } from "../modules/main/routes/MainRoutes";
import { TeacherRoutes } from "../modules/teachers/routes/TeacherRoutes";
import { StudentsRoutes } from "../modules/students/routes/StudentsRoutes";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
     ...MainRoutes,
     ...TeacherRoutes,
     ...StudentsRoutes

    ],
  },
];
