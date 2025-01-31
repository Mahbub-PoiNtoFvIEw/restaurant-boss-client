import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Componants/SocialLogin/SocialLogin";
import img from '../../assets/others/authentication.png';
import img2 from '../../assets/others/authentication2.png';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // console.log("user profile info updated");
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created successfully..!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                logOut();
                navigate("/login");
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.err(err.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div
        className="hero my-2 mx-2 py-6"
        style={{
          backgroundImage: `url(${img})`, // Custom width & height
        }}
      >
        <div className="md:flex flex-row-reverse justify-center items-center shadow-2xl w-[70%]">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={img2} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shrink-0">
          <h1 className="text-3xl font-bold mb-2 text-center">Sign Up !</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && <span>PhotoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Email is required</span>}
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
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&/%. *])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p>Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p>Password must be 8 character or longer</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p>Password must be less than 20 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p>
                    Password must have one upper case, one lower case, one
                    number and one special character
                  </p>
                )}
                <div
                  className="absolute right-2 top-7 text-2xl text-slate-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn w-full bg-[#D1A054] text-white"
                  type="submit"
                  value="SinUp"
                />
              </div>
            </form>
            <div className="text-center py-2 mb-2">
              <div>
                <p className="text-[#D1A054]">
                  Already Registered ?
                  <Link to={`/login`} className="ml-2">
                    Go to Log in
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

export default SignUp;
