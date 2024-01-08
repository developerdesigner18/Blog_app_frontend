"use client";

import React from "react";
import { useUserContext } from "../context/userContext";

const home = () => {
  const { user } = useUserContext();
  console.log(user, "Please check ");

  return <div>home</div>;
};

export default home;
