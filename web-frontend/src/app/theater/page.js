import Theater from "@/components/template/theaters/Theater";
import TheaterProvider from "@/contexts/TheaterContext";

const Page = () => {
    return (
        <TheaterProvider>
            <Theater />
        </TheaterProvider>
    );
};

export default Page;
