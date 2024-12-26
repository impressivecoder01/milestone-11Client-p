import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../../assets/Lottiefiles/Animation - 1734550880947.json";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password);
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("password should be at least 6 character, and one upper case ");
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo });
        alert("register successful");
        navigate("/");
        from.reset()
      })
      .catch((error) => {
        console.log(error.message);
      });
    //   try {
    //     //2. User Registration
    //     const result = await createUser(email, pass)
    //     console.log(result)
    //     await updateUserProfile(name, photo)
    //     setUser({ ...result.user, photoURL: photo, displayName: name })
    //     toast.success('Signup Successful')
    //     navigate('/')
    //   } catch (err) {
    //     console.log(err)
    //     toast.error(err?.message)
    //   }
    // }
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center py-4">
              Register Now!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="url"
                  placeholder="PhotoURL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link to='/login'>Login Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
