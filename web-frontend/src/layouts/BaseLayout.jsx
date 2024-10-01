import "@/styles/main.scss";

const BaseLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default BaseLayout;
