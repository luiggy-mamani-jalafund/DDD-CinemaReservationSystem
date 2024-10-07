export function validateForm(formData, setErrors) {
    let formErrors = {};
    if (!formData.fullName.trim()) {
        formErrors.fullName = "Full name is required";
    }

    if (!formData.ci.trim()) {
        formErrors.ci = "CI is required";
    }

    if (!formData.email.trim()) {
        formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = "Email is not valid";
    }

    if (!formData.cardNumber.trim()) {
        formErrors.cardNumber = "Card Number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
        formErrors.cardNumber = "Card Number should be 16 digits";
    }

    if (!formData.cvc.trim()) {
        formErrors.cvc = "CVC is required";
    } else if (!/^\d{3}$/.test(formData.cvc)) {
        formErrors.cvc = "CVC should be 3 digits";
    }

    if (!formData.dueDate.trim()) {
        formErrors.dueDate = "Due date is required";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
}
