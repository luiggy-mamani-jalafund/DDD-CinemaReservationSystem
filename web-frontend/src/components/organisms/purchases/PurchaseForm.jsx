"use client";

import { useState, useContext } from "react";
import "@/styles/modules/_purschase_form.scss";
import { validateForm } from "@/utils/validators/PurchaseValidator";
import EmailPurchase from "@/components/molecules/purchases/EmailPurchase";
import TextPurchase from "@/components/molecules/purchases/TextPurchase";
import CardNumberPurchase from "@/components/molecules/purchases/CardNumberPurchase";
import CvcPurchase from "@/components/molecules/purchases/CvcPurchase";
import DueDateCardPurchase from "@/components/molecules/purchases/DueDateCardPurchase";
import Popup from "../Popup";
import { TheaterContext } from "@/contexts/TheaterContext";
import { usePathname, useRouter } from "next/navigation";

const PurchaseForm = () => {
    const { schedule, selectedSeats, getTotalPrice } =
        useContext(TheaterContext);
    const router = useRouter();
    const pathname = usePathname();
    const totalPrice = getTotalPrice();
    const [isBuying, setBuying] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        ci: "",
        email: "",
        cardNumber: "",
        cvc: "",
        dueDate: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const cancelPurchase = () => {
        setBuying(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const formToPurchaseObj = () => {
        return {
            hourScheduleId: schedule.id,
            reservedSeats: selectedSeats.map((seat) => seat.seatId),
            client: {
                ci: formData.ci,
                fullName: formData.fullName,
                email: formData.email,
            },
        };
    };

    const updateTheater = () => {
        let updatedSchedule = {
            ...schedule,
            reservedSeats: [
                ...schedule.reservedSeats,
                ...selectedSeats.map((seat) => seat.seatId),
            ],
        };

        const queryString = objectToQueryString(updatedSchedule);
        let newUrl = `${pathname}?${queryString}`;
        window.history.replaceState({}, "", newUrl);
        router.refresh();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) {
            return;
        }

        setLoading(true);

        if (!validateForm(formData, setErrors)) {
            setLoading(false);
            return;
        }

        try {
            updateTheater();
            setBuying(false);
            setLoading(false);
        } catch (_) {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                className={`continueButton | ${totalPrice <= 0 && "hidden"}`}
                onClick={() => setBuying(true)}
            >
                Buy seats {Math.round(totalPrice)} Bs
            </button>

            <Popup isOpen={isBuying}>
                <form onSubmit={handleSubmit} className="reservation-form">
                    <h2 className="reservation-form-title">
                        Purchase of Seats
                    </h2>
                    <h3 className="reservation-form-subtitle">Personal Data</h3>

                    <TextPurchase
                        legend={"Full name"}
                        handleInputChange={handleInputChange}
                        name={"fullName"}
                        value={formData.fullName}
                        error={errors.fullName}
                    />
                    <TextPurchase
                        legend={"CI"}
                        handleInputChange={handleInputChange}
                        name={"ci"}
                        value={formData.ci}
                        error={errors.ci}
                    />
                    <EmailPurchase
                        email={formData.email}
                        errorEmail={errors.email}
                        handleInputChange={handleInputChange}
                    />

                    <h3 className="reservation-form-subtitle">
                        Payment Method
                    </h3>

                    <div className="payment-wrapper">
                        <CardNumberPurchase
                            cardNumber={formData.cardNumber}
                            cardNumberError={errors.cardNumber}
                            handleInputChange={handleInputChange}
                        />

                        <CvcPurchase
                            cvc={formData.cvc}
                            cvcError={errors.cvc}
                            handleInputChange={handleInputChange}
                        />

                        <DueDateCardPurchase
                            dueDate={formData.dueDate}
                            dueDateError={errors.dueDate}
                            handleInputChange={handleInputChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="button" onClick={cancelPurchase}>
                            Cancel
                        </button>
                        <button type="submit">
                            {loading
                                ? "Buying ..."
                                : `Buy ${Math.round(totalPrice)} Bs`}
                        </button>
                    </div>
                </form>
            </Popup>
        </>
    );
};

export default PurchaseForm;

function objectToQueryString(obj, paramName = "schedule") {
    const encodedValue = encodeURIComponent(JSON.stringify(obj));
    return `${paramName}=${encodedValue}`;
}
