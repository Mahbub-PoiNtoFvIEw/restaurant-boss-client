import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {createUser, updateUserProfile, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{
            console.log("user profile info updated");
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created successfully..!",
                showConfirmButton: false,
                timer: 1500
              });
              logOut();
              navigate('/login');
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.err(err.message);
    })
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content md:flex">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  className="btn w-full btn-primary"
                  type="submit"
                  value="SinUp"
                />
              </div>
              <div>
                <p>
                  Already Registered ?
                  <Link to={`/login`} className="btn btn-link pl-1">
                    Go to Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
