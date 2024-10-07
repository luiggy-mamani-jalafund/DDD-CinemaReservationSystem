import BaseLayout from "@/layouts/BaseLayout";

export const metadata = {
    title: "Movies SL",
    description: "app movie to purchase seats for an specific movie",
};

export default function RootLayout({ children }) {
    return (
        <BaseLayout>
            <>{children}</>
        </BaseLayout>
    );
}
