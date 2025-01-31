import { useForm } from "react-hook-form";
import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import { FaLocationArrow, FaReceipt } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [disabled, setDisabled] = useState(true);
  
  const onSubmit = async (data) => {
    console.log(data);
    // if (!captchaValue) {
    //   return;
    // }
    
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setDisabled(false)
    console.log("Captcha Value:", value);
  };

  return (
    <div>
      <SectionTitle
        subHeading="Send Us a Message"
        Heading="contact form"
      ></SectionTitle>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[#E8E8E8] md:p-10 p-2 space-y-4">
            <div className="md:flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone*</span>
              </label>
              <input
                type="number"
                placeholder="Phone"
                {...register("phone", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Message*</span>
              </label>
              <textarea
                {...register("message", { required: true })}
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div className="form-control">
                 <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Replace with your actual Site Key
                  onChange={handleCaptchaChange}
                />
            </div>
            <div className={`form-control`}>
            {!captchaValue ? <p>Please complete the captcha</p> : <p className="opacity-100 transition-opacity duration-5000">you are not robot</p>}
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" disabled={disabled}  className={`flex items-center py-2 px-4 gap-2 text-white font-bold ${disabled? 'cursor-not-allowed bg-slate-100': 'cursor-pointer bg-linear-to-r from-[#835D23] to-[#B58130]'}`}>
                Send Message <FaLocationArrow></FaLocationArrow>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
