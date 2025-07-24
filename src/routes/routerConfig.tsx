import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h1>Erro!</h1>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]

export const routesConfig = createBrowserRouter(routes);