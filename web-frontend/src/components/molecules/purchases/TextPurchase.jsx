const TextPurchase = ({ legend, name, value, error, handleInputChange }) => {
    return (
        <div className="form-group">
            <label>{legend}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleInputChange}
            />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default TextPurchase;
