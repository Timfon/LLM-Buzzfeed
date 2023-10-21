import {useRouteError, Link} from "react-router-dom"

export default function BadURL(){
    const error = useRouteError();
    console.error(error)
    return(
        <div className = "text-center min-h-screen flex align-middle">
            <div className = "m-auto">
                <h1 className = "text-xl">Oopsie poopsie you did a woopsie</h1>
                <p className = "my-3">
                <i>
                    {(error as Error)?.message ||
                        (error as { statusText?: string })?.statusText}
                    </i>
                </p>
                <Link to = ".." className = "bg-secondary py-1 px-3 my-3">Go back!</Link>
            </div>
        </div>
    );
}