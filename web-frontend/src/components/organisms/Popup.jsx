import "@/styles/modules/_popup.scss";

const Popup = ({ isOpen, children }) => {
    return (
        isOpen && (
            <div className="overall | child-center">
                <div className="popup-wrapper">{children}</div>
            </div>
        )
    );
};

export default Popup;
