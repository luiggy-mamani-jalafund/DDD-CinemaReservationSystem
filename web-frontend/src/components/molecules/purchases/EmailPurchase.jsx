const EmailPurchase = ({ email, errorEmail, handleInputChange }) => {
    return (
        <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            {errorEmail && <p className="error">{errorEmail}</p>}
        </div>
    );
};

export default EmailPurchase;
