import TheaterSeat from "@/components/molecules/theaters/TheaterSeat";

const SeatingSetRenderer = ({ seatingSet }) => {
    if (seatingSet.seats.length === 0) {
        return;
    }

    const SeatingSetStyle = {
        gridTemplateColumns: `repeat(${seatingSet.columns}, var(--seat-size))`,
        gridTemplateRows: `repeat(${seatingSet.rows}, var(--seat-size))`,
    }

    return (
        <section
            className="theater-seating-set-wrapper"
            style={SeatingSetStyle}
        >
            {seatingSet.seats.map((seat, i) => (
                <TheaterSeat seat={seat} key={`seat-${i}-${seat.seatId}`} />
            ))}
        </section>
    );
};

export default SeatingSetRenderer;
