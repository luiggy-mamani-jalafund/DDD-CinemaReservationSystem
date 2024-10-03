import Theater from "@/components/template/theaters/Theater";
import TheaterProvider from "@/contexts/TheaterContext";

const Page = ({ params }) => {
    return (
        <TheaterProvider>
            <Theater theaterId={params.id} />
        </TheaterProvider>
    );
};

export default Page;
