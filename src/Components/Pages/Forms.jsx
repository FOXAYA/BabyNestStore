import React, { useState } from "react";

const Forms = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agree: false,
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d+$/;
        return re.test(String(phone));
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email || !validateEmail(formData.email)) newErrors.email = "Valid email is required";
        if (!formData.phone || !validatePhone(formData.phone)) newErrors.phone = "Valid phone number is required";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";
        if (!formData.agree) newErrors.agree = "You must agree to the privacy policy";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccess(false);
        } else {
            setErrors({});
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                agree: false,
            });
            setTimeout(() => setSuccess(false), 3000);
        }
    };

    return (
        <div
            style={{
                padding: "30px",
                borderRadius: "8px",
                maxWidth: "90%",
                margin: "auto",
                boxSizing: "border-box",
            }}
        >
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                            }}
                        />
                        {errors.name && <div style={{ color: "red", fontSize: "12px" }}>{errors.name}</div>}
                    </div>
                    <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                            }}
                        />
                        {errors.email && <div style={{ color: "red", fontSize: "12px" }}>{errors.email}</div>}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                            }}
                        />
                        {errors.phone && <div style={{ color: "red", fontSize: "12px" }}>{errors.phone}</div>}
                    </div>
                    <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                            }}
                        />
                        {errors.subject && <div style={{ color: "red", fontSize: "12px" }}>{errors.subject}</div>}
                    </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you? Feel free to get in touch!"
                        rows="5"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                        }}
                    />
                    {errors.message && <div style={{ color: "red", fontSize: "12px" }}>{errors.message}</div>}
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ fontSize: "14px", color: "#2c2c54" }}>
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleInputChange}
                            style={{ marginRight: "10px" }}
                        />
                        I agree to the Privacy Policy
                    </label>
                    {errors.agree && <div style={{ color: "red", fontSize: "12px" }}>{errors.agree}</div>}
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#ffb400",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px",
                        width: "100%",
                    }}
                >
                    Get In Touch
                </button>
                {success && (
                    <div style={{ color: "green", fontSize: "14px", marginTop: "20px" }}>
                        Thank you for filling out the application!
                    </div>
                )}
            </form>
        </div>
    );
};

export default Forms;