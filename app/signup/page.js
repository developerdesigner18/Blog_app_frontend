"use client";

import React, { useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import { userSignUp } from "../_utils/services";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";

const signup = () => {
  const router = useRouter();
  const { setUser } = useUserContext();

  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = async () => {
    const { success, data } = await userSignUp(userData);
    if (success) {
      console.log(data);
      setUser(data);
      router.push("/home");
    }
  };

  return (
    <div className="md:w-[40%] w-[90%] md:mt-0 mt-[20px] md:absolute block md:top-[15%] md:left-[30%] m-auto items-center justify-center">
      <div>
        <p className="text-center mb-10 font-semibold text-[25px]">Sign Up</p>
        <div className="mb-[10px]">
          <label className="text-[15px] font-semibold mb-[10px]">
            Full Name
          </label>
          <Input
            placeholder="Full Name"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, fullName: e.target.value }))
            }
          />
        </div>
        <div className="mb-[10px]">
          <label className="text-[15px] font-semibold mb-[10px]">
            Username
          </label>
          <Input
            placeholder="Username"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div className="mb-[10px]">
          <label className="text-[15px] font-semibold mb-[10px]">Email</label>
          <Input
            placeholder="Email"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="mb-[10px]">
          <label className="text-[15px] font-semibold mb-[10px]">
            Password
          </label>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignUp}
        >
          Sign up
        </button>
        Or <Link href="/login">Login!</Link>
      </div>
    </div>
  );
};

export default signup;
