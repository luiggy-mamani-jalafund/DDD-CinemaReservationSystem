import TypesSeatState from "@/components/molecules/theaters/TypesSeatState";
import TheaterRenderer from "@/components/organisms/theaters/TheaterRenderer";
import "@/styles/layout/_theater_layout.scss";
import "@/styles/other/_theater_items.scss";

const Theater = ({ theaterId }) => {
    return (
        <main className="main-theater-wrapper">
            <div className="theater-screen"></div>
            <div className="theater-screen-text">screen</div>
            <TheaterRenderer theaterId={theaterId} />
            <TypesSeatState/>
        </main>
    );
};

export default Theater;
