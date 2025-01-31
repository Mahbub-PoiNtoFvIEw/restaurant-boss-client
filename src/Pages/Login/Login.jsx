import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Componants/SocialLogin/SocialLogin";
import img from '../../assets/others/authentication.png';
import img2 from '../../assets/others/authentication2.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Login successful..!",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setDisabled(true);
        loadCaptchaEnginge(4);
      });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero my-2 mx-2 py-6" style={{
    backgroundImage: `url(${img})` // Custom width & height
  }}>
        <div className="md:flex justify-center items-center shadow-2xl w-[70%]">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={img2} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shrink-0">
          <h1 className="text-3xl font-bold mb-2 text-center">Login !</h1>
            <form onSubmit={handleLogin} className="card-body py-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div
                  className="absolute right-2 top-7 text-2xl text-slate-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type Captcha"
                  name="captcha"
                  className="input input-bordered"
                  ref={captchaRef}
                />
                <button
                  type="button"
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2 w-full"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn w-full bg-[#D1A054] text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center py-2 mb-2">
                <div>
                  <p className="text-[#D1A054]">
                    New here ? 
                    <Link to={`/signup`} className="ml-2">
                       Create a new account
                    </Link>
                  </p>
                  <div className="divider px-8 my-2"><span>Or Sign in with</span></div>
                </div>
                <div className="mx-auto">
                  <SocialLogin></SocialLogin>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
