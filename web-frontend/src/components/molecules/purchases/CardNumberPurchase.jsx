const CardNumberPurchase = ({
    cardNumber,
    cardNumberError,
    handleInputChange,
}) => {
    return (
        <div className="form-group payment-number">
            <label>Number</label>
            <input
                type="text"
                name="cardNumber"
                value={cardNumber}
                onChange={handleInputChange}
            />
            {cardNumberError && <p className="error">{cardNumberError}</p>}
        </div>
    );
};

export default CardNumberPurchase;
