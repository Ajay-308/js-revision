// one function

import React from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      navigate("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

// export default withAuth;

// other function

import React from "react";
import withAuth from "./withAuth";

const Dashboard = () => {
  return <h1>Welcome to the Dashboard!</h1>;
};

export default withAuth(Dashboard);
