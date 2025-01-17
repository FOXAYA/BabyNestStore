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
<div>
         {/* العمود الأيمن */}
         <div style={{ flex: "1", paddingLeft: "20px", padding: "30px", borderRadius: "8px" }}>
         <form onSubmit={handleSubmit}>
             <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                 <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     placeholder="Name"
                     style={{
                         flex: "1",
                         padding: "15px",
                         border: "1px solid #ccc",
                         borderRadius: "4px",
                         fontSize: "16px",
                     }}
                 />
                 {errors.name && <div style={{ color: "red", fontSize: "12px" }}>{errors.name}</div>}
                 <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     placeholder="Email Address"
                     style={{
                         flex: "1",
                         padding: "15px",
                         border: "1px solid #ccc",
                         borderRadius: "4px",
                         fontSize: "16px",
                     }}
                 />
                 {errors.email && <div style={{ color: "red", fontSize: "12px" }}>{errors.email}</div>}
             </div>
             <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                 <input
                     type="text"
                     name="phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                     placeholder="Phone"
                     style={{
                         flex: "1",
                         padding: "15px",
                         border: "1px solid #ccc",
                         borderRadius: "4px",
                         fontSize: "16px",
                     }}
                 />
                 {errors.phone && <div style={{ color: "red", fontSize: "12px" }}>{errors.phone}</div>}
                 <input
                     type="text"
                     name="subject"
                     value={formData.subject}
                     onChange={handleInputChange}
                     placeholder="Subject"
                     style={{
                         flex: "1",
                         padding: "15px",
                         border: "1px solid #ccc",
                         borderRadius: "4px",
                         fontSize: "16px",
                     }}
                 />
                 {errors.subject && <div style={{ color: "red", fontSize: "12px" }}>{errors.subject}</div>}
             </div>
             <textarea
                 name="message"
                 value={formData.message}
                 onChange={handleInputChange}
                 placeholder="How can we help you? Feel free to get in touch!"
                 rows="5"
                 style={{
                     width: "100%",
                     padding: "15px",
                     border: "1px solid #ccc",
                     borderRadius: "4px",
                     fontSize: "16px",
                     marginBottom: "20px",
                 }}
             />
             {errors.message && <div style={{ color: "red", fontSize: "12px" }}>{errors.message}</div>}
             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                 <button
                     type="submit"
                     style={{
                         backgroundColor: "#ffb400",
                         color: "#fff",
                         border: "none",
                         padding: "12px 25px",
                         borderRadius: "4px",
                         cursor: "pointer",
                         fontSize: "16px",
                     }}
                 >
                     Get In Touch
                 </button>
                 <div>
                     <input
                         type="checkbox"
                         id="privacy"
                         name="agree"
                         checked={formData.agree}
                         onChange={handleInputChange}
                     />
                     <label
                         htmlFor="privacy"
                         style={{
                             marginLeft: "5px",
                             fontSize: "14px",
                             color: "#2c2c54",
                         }}
                     >
                         I agree to the Privacy Policy
                     </label>
                     {errors.agree && <div style={{ color: "red", fontSize: "12px" }}>{errors.agree}</div>}
                 </div>
             </div>
             {success && (
                 <div
                     style={{
                         color: "green",
                         fontSize: "14px",
                         marginTop: "20px",
                     }}
                 >
                     Thank you for filling out the application!
                 </div>
             )}
         </form>
     </div>
 </div>
);
};

export default Forms;