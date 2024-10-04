const DueDateCardPurchase = ({ dueDate, dueDateError, handleInputChange }) => {
    return (
        <div className="form-group payment-duedate">
            <label>Due Date</label>
            <input
                type="text"
                name="dueDate"
                value={dueDate}
                onChange={handleInputChange}
            />
            {dueDateError && <p className="error">{dueDateError}</p>}
        </div>
    );
};

export default DueDateCardPurchase;
