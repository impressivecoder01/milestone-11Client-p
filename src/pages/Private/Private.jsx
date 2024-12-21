import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import { p } from 'motion/react-client';

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)
  if (loading) {
    return (
      <p className="text-center">
        Loading <span className="loading loading-spinner loading-lg"></span>
      </p>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default Private;
