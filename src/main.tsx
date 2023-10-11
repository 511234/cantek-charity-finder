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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "charity/:id",
        element: <CharityDetail />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
