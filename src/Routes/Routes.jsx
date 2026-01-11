import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/experience",
        element: <Experience></Experience>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path:'/skills',
        element:<Skills></Skills>
      }
    ],
  },
]);
export default router;
