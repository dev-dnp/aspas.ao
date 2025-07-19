import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]

export const routesConfig = createBrowserRouter(routes);