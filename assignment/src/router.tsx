import {
    createBrowserRouter,
    Link
} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "about",
        element: <AboutPage />,
    },
]);

export default router