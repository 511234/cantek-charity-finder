import { useRouteError } from "react-router-dom";

interface IRouteError {
    statusText: string;
    message: string;
}

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>404 Page Not Found</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{(error as IRouteError).statusText || (error as IRouteError).message}</i>
            </p>
        </div>
    );
}