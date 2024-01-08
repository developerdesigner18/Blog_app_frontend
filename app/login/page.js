"use client";

import React from "react";
import { Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useUserContext } from "../context/userContext";

const login = () => {
  return (
    <div className="md:w-[40%] w-[90%] md:mt-0 mt-[20px] md:absolute block md:top-[30%] md:left-[30%] m-auto h-screen  items-center justify-center">
      <Form>
        <p className="text-center mb-10 font-semibold text-[25px]">Login</p>
        <Form.Item>
          <label className="text-[18px] font-semibold mb-[5px]">Email</label>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <label className="text-[18px] font-semibold mb-[5px]">Password</label>
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <button
            type="primary"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log in
          </button>
          Or <Link href="/signup">Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default login;
