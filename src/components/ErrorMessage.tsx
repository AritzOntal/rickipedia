export const ErrorMessage = ({ error }: { error: string }) => {
    return <div className="error-msg">⚠️ {error}</div>;
};