const TypesSeatState = () => {
    return (
        <div className="type-seat-wrapper | dup-space">
            <div className="type-seat-wrapper">
                <div className="type-seat" data-state="selected"></div>
                <span>Selected</span>
            </div>
            <div className="type-seat-wrapper">
                <div className="type-seat" data-state="occupied"></div>
                <span>Occupied</span>
            </div>
            <div className="type-seat-wrapper">
                <div className="type-seat"></div>
                <span>Available</span>
            </div>
        </div>
    );
};

export default TypesSeatState;
