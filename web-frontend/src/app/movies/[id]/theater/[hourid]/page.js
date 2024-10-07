import Theater from "@/components/template/theaters/Theater";
import TheaterProvider from "@/contexts/TheaterContext";

const Page = ({ params }) => {
    return (
        <TheaterProvider>
            <Theater movieId={params.id} hourId={params.hourid} />
        </TheaterProvider>
    );
};

export default Page;
