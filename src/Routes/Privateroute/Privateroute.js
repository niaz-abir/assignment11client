import React from "react";
import { useCol } from "react-bootstrap/esm/Col";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../Components/Context/Authprovide";

const Privateroute = ({ children }) => {
  const { user } = useCol(Authcontext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default Privateroute;
