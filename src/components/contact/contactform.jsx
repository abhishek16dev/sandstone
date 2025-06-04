import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseMsg("");

    const formData = new FormData(e.target);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        service: formData.get("service"),
    };

    try {
        const response = await fetch("https://webnestmedia.com/webnestmediacontac.php/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            setResponseMsg(result.message || "Form submitted successfully.");
            e.target.reset(); // ✅ Clear form fields
        } else {
            const errorText = await response.text();
            setResponseMsg("Submission failed: " + errorText);
        }
    } catch (error) {
        console.error("Submission error:", error);
        setResponseMsg("Submission failed. Please try again.");
    } finally {
        setSubmitting(false);
    }
};

    return (
        <div className="conatctform">
            <form onSubmit={handleSubmit}>

                <div className="form-group mt-[100px] max-lg:mt-[30px] mb-[20px] border-b border-b-[1px] border-b-[#5c945c] pb-[10px]">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        className="w-[100%]  bg-[unset] outline-none border-none"
                    />
                </div>

                <div className="form-group mb-[20px] border-b  border-b-[#5c945c] pb-[10px]">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-[100%]    outline-none  bg-[unset] border-none"
                    />
                </div>

                <div className="form-group mb-[20px] border-b  border-b-[#5c945c] pb-[10px]">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        className="w-[100%] bg-[unset]  outline-none border-none"
                    />
                </div>

                <div className="form-group mb-[20px] border-b  border-b-[#5c945c] pb-[10px]">
                    <select
                        name="service"
                        required
                        className="w-full  bg-transparent text-[#5c945c] outline-none border-none appearance-none"
                    >
                        <option value="">Select a service</option>
                        <option>Search Engine Marketing (SEM)</option>
                        <option>Search Engine Optimization (SEO)</option>
                        <option>Social Media Marketing (SMM)</option>
                        <option>Web Development</option>
                        <option>Content Marketing</option>
                        <option>Affiliate Marketing</option>
                    </select>
                </div>

                <div className="form-group mb-[20px] border-b bg-[unset]  border-b-[#5c945c] pb-[10px] w-[100%]">
                    <textarea
                        name="message"
                        placeholder="Mention your specific requirements"
                        className="w-[100%] outline-none border-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="text-[white] mb-[20px] px-[20px] py-[10px] bg-[#5c945c] rounded-md"
                    disabled={submitting}
                >
                    {submitting ? "Submitting..." : "Submit"}
                </button>

                {responseMsg && <p className="text-green-500 mt-2">{responseMsg}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
