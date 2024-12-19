import React, { useContext } from "react";
import lottieSingInAnimation from "../../src/assets/LottieLogin/Animation - 1734564332865.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const SignIn = () => {
  const navigate = useNavigate()
  const {singInUser,setUser} = useContext(AuthContext)
  const handleSignIn = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    singInUser(email, password)
    .then(result => {
      console.log('signInUser', result.user)
      setUser(result.user)
      navigate('/')
    })
    .catch(error => {
      alert( error.message)
    })
  };
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex ">
          <div className="text-center lg:text-left">
            
            <div>
              <Lottie animationData={lottieSingInAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <form onSubmit={handleSignIn} className="card-body">
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
