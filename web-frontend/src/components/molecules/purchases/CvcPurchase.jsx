const CvcPurchase = ({ cvc, cvcError, handleInputChange }) => {
    return (
        <div className="form-group payment-cvc">
            <label>CVC</label>
            <input
                type="text"
                name="cvc"
                value={cvc}
                onChange={handleInputChange}
            />
            {cvcError && <p className="error">{cvcError}</p>}
        </div>
    );
};

export default CvcPurchase;
