"use client";

import React from "react";
import { Form, Input } from "antd";
import Link from "next/link";

const page = () => {
  return (
    <div className="md:w-[40%] w-[90%] md:mt-0 mt-[20px] md:absolute block md:top-[15%] md:left-[30%] m-auto items-center justify-center">
      <Form>
        <p className="text-center mb-10 font-semibold text-[25px]">Sign Up</p>
        <Form.Item>
          <label className="text-[18px] font-semibold mb-[5px]">
            Full Name
          </label>
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item>
          <label className="text-[18px] font-semibold mb-[5px]">Username</label>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <label className="text-[18px] font-semibold mb-[5px]">Email</label>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <label className="text-[18px] font-semibold mb-[5px]">Password</label>
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <button
            type="primary"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign up
          </button>
          Or <Link href="/login">Login!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default page;
