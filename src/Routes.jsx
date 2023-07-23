import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Errorpge from "./Errorpge";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import Login from "./pages/shared/login/Login";
import Register from "./pages/shared/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpge />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, {
        path: 'contact',
        element: <Contact></Contact>
      }, {
        path: 'about',
        element: <About></About>
      }, {
        path: 'login',
        element: <Login></Login>
      }, {
        path: "register",
        element: <Register></Register>
      }
    ],
  },
]);
export default router;
