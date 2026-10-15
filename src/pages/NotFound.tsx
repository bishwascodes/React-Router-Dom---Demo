import { useLocation } from "react-router-dom";

type ErrorState = {
    code?: number;
    message?: string;
} | null;


export default function NotFound() {
    const location = useLocation();
    const state : ErrorState= location.state;

    // Fall back to a normal 404 when no state was passed
    const code = state?.code ?? 404;
    const message = state?.message ?? "Page Not Found";
    return (
        <>
            <h1>{code} Error</h1>
            <h2>{message}</h2>
        </>
    )
}

