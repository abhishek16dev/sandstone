import React, { useState } from "react";

import image1 from "./resource/image1.jpg";
import image2 from "./resource/image2.jpg";
import "./contactus.css"

const contactuspage = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setResponseMsg("");

    try {
      const response = await fetch("https://sandandstones.in/sandcontactForm.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMsg(result.message || "Form submitted successfully.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
    <div className=' mt-[9rem] w-full max-w-[1440px] max-auto max-md:mt-[0]'>
      

      <div className="cbreadcrum w-full h-[28.6rem]   flex items-center justify-center pl-[15rem] pr-[15rem] max-lg:pl-[2rem]  max-lg:pr-[2rem]">
      
        <div className="flex items-center justify-between w-[100%] max-lg:flex-col max-md:justify-start ">
          
          <h1 className="text-white text-[8.2rem] leading-[96%]  font-bold mb-4">Contact</h1>
          <div className="flex items-center px-[2rem] py-[1rem] gap-[1.6rem] bg-[#FFFFFF33]">
            <p className="  text-white px-3 py-1 text-[1.3rem] font-semibold rounded">HOME</p>
            <p className="text-white text-[1.3rem] font-semibold">›</p>
            <p className="text-[#facc15] text-[1.3rem] font-semibold ">CONTACT</p>
          </div>
        </div>
      </div>

      <div className=" mb-[10rem] pl-[15rem] gap-[6.4rem] pr-[15rem] max-lg:pl-[2rem]  max-lg:pr-[2rem]  mx-auto w-full flex flex-col md:flex-row  mt-[60px]">
        {/* Left Images */}
        <div className="lg:sticky lg:top-[20rem] self-start flex flex-col gap-8 w-full md:w-1/2 max-lg:w-[100%]">

          <div className="bg-gray-300  w-full h-[240px] md:h-[300px] rounded-md flex items-center justify-center text-xl font-bold text-gray-500">
            <img src={image1} className='w-[100%] h-[100%] object-cover' />
          </div>

      


        </div>


        <div className=" w-full md:w-1/2 flex flex-col justify-center mt-[0.8rem] max-lg:w-[100%]">
          <span className="font-manrope font-bold text-[1.4rempx] leading-tight100 tracking-wider5 uppercase text-[#4F6D56]">Contact</span>

          <h2 className="font-manrope font-bold text-[5.4rem] leading-[6.4rem] tracking-wider5 uppercase text-[#131714] mt-[1rem]">Contact Us</h2>
          <p className="text-[1.4rem] leading-[2.2rem] font-raleway text-[#6F7470] mt-[3.2rem]">
        Located in Bangalore, we transform spaces with creativity and detail, catering to the growing demand for beautiful living and working environments.
          </p>
          <div className="mt-[3.2rem]">
            <span className="uppercase text-[1.3rem] text-[#4F6D56] font-extrabold font-manrope leading-[2.2rem] ">Info Contact</span>
            <div className="mt-[1.6rem] text-sm text-[#131714]">
              <p className='text-[#131714] font-medium text-[1.8rem] leading-[2.8rem] font-raleway'>Bangalore , India </p>


              <p className='text-[#131714] font-medium text-[1.8rem] leading-[2.8rem] font-raleway mt-[0.8rem]'> officesandandstone@gmail.com  </p>

              <p className='text-[#131714] font-medium text-[1.8rem] leading-[2.8rem] font-raleway mt-[0.8rem] '>+91 90356 62976 </p>


            </div>
          </div>
     <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <p className="font-manrope font-extrabold text-[32px] leading-[38px] tracking-[0] text-[#131714] mt-[3.2rem] mb-[3.2rem]">
        Get a Quote
      </p>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}

      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />
      {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-9 py-4 rounded w-fit mt-2 transition"
      >
        {submitting ? "Submitting..." : "SEND MESSAGE"}
      </button>

      {responseMsg && (
        <p className="text-green-600 text-sm mt-2">{responseMsg}</p>
      )}
    </form>
        </div>
      </div>
    </div>
  )
}

export default contactuspage;
