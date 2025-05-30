
import React from "react";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log("Form submitted:", data);
    };

    return (
        <div className="conatctform">
            <form onSubmit={handleSubmit}>



                <div className="form-group mt-[100px] max-lg:mt-[30px] mb-[20px] border-b border-b-[1px] border-b-[#5c945c]
pb-[10px] ">

                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                        className=" w-[100%] outline-none border-none"
                    />
                </div>

                <div className="form-group mb-[20px] border-b border-b-[1px] border-b-[#5c945c]
pb-[10px] ">

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-[100%] outline-none border-none"
                    />
                </div>

                <div className="form-group mb-[20px] border-b border-b-[1px] border-b-[#5c945c]
pb-[10px] ">

                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        required
                        className=" w-[100%] outline-none border-none"
                    />
                </div>

                <div className="form-group mb-[20px] border-b border-b-[1px] border-b-[#5c945c]
pb-[10px] ">

                  <select
  id="services"
  name="services"
  required
  className="w-full bg-transparent text-[#5c945c] outline-none border-none appearance-none"
>
  <option className="text-[#5c945c] bg-transparent">Select a service</option>
  <option className="text-[#5c945c] bg-transparent">Search Engine Marketing (SEM)</option>
  <option className="text-[#5c945c] bg-transparent">Search Engine Optimization (SEO)</option>
  <option className="text-[#5c945c] bg-transparent">Social Media Marketing (SMM)</option>
  <option className="text-[#5c945c] bg-transparent">Web Development</option>
  <option className="text-[#5c945c] bg-transparent">Content Marketing</option>
  <option className="text-[#5c945c] bg-transparent">Affiliate Marketing</option>
</select>


                </div>

                <div className="form-group mb-[20px] border-b border-b-[1px] border-b-[#5c945c]
pb-[10px]  w-[100%] ">

                    <textarea
                        id="specifications"
                        name="specifications"
                        placeholder="Mention your specific requirements"
                        className=" w-[100%] outline-none border-none"
                    ></textarea>
                </div>

                {/* <div className="form-group mb-[20px] p-[5px]  bg-[#5c945c]   "> */}
                    <button type="submit " className="text-[white] mb-[20px] px-[20px] py-[10px]   bg-[#5c945c] rounded-md ">Submit</button>
                {/* </div> */}
            </form>
        </div>
    );
}

export default ContactForm;

