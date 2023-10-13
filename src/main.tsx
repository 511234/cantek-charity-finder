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
import {QueryClient, QueryClientProvider} from "react-query";

const router = createBrowserRouter([
    {
        path: "/hi",
        element: <div>Hii</div>
    },
    {
        path: "/favourite",
        element: <Favourite/>,
    },
    {
        path: "/search/:cause",
        element: <SearchPage/>,
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

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>,
)
