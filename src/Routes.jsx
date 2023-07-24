import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Errorpge from "./Errorpge";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import Login from "./pages/shared/login/Login";
import Register from "./pages/shared/register/Register";
import Acount from "./pages/acount/Acount";
import AcountHome from "./pages/acount/AcountHome";
import MyApplication from "./pages/acount/MyApplication";
import Serch from "./pages/serch/Serch";
import Seemore from "./pages/shared/seemore/Seemore";

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
      }, {
        path: 'serch/:type/:keyword',
        element: <Serch></Serch>,
        loader: (req) => fetch(`https://sunshine-phi.vercel.app/serch?type=${req.params.type}&keyword=${req.params?.keyword}`)

      }, {
        path: 'seemore/:id',
        element: <Seemore></Seemore>,
        loader: (req) => fetch(`http://localhost:1111/detaill/${req.params.id}`)

      }
    ],
  }, {
    path: 'a',
    element: <Acount></Acount>,
    errorElement: <Errorpge></Errorpge>,
    children: [
      {
        path: "acount",
        element: <AcountHome></AcountHome>
      },
      {
        path: "application",
        element: <MyApplication></MyApplication>
      }
    ]
  }
]);
export default router;
