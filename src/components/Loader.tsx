export const Loader = ({ message = "🌀 Cargando..." }: { message?: string }) => {
    return <div className="loading-msg">{message}</div>;
};