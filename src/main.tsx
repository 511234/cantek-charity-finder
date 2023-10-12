import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./Pages/error-page.tsx";
import {CharityDetail} from "./Pages/charity-detail.tsx";
import {SearchPage} from "./Pages/search-page.tsx";
import {Favourite} from "./Pages/favourite.tsx";

const router = createBrowserRouter([
    {
        path: "/hi",
        element: <div>Hii</div>
    },
    {
        path: "/favourite",
        element: <Favourite />,
    },
    {
        path: "/search/:cause",
        element: <SearchPage />,
    },
    {
        path: "/charity/:id",
        element: <CharityDetail/>,
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
