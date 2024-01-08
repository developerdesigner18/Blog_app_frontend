import axios from "axios";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const userSignUp = async (data) => {
  try {
    let result = (await axios.post(`${url}/auth/signup`, data)).data;
    if (result.success) {
      localStorage.setItem("token", result.token);
    }
    return { success: result.success, message: result.message, data: result };
  } catch (error) {
    console.log("error", error);
    return { success: false, message: error.response.data.message };
  }
};
