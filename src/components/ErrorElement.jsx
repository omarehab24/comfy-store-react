import { useRouteError } from "react-router-dom"

function ErrorElement() {
    const error = useRouteError();
    return <h4 className="font-bold text-4xl">Something went wrong</h4>
}

export default ErrorElement