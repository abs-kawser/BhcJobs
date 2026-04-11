import axiosInstance from "../axiosInstance";

export const registerUser = async (payload) => {
  try {
    const res = await axiosInstance.post(
      "/api/job_seeker/register",
      payload
    );
    return res.data;
  } catch (error) {
    console.log("Register Error:", error.response?.data || error.message);
    throw error;
  }
};


export const verifyPhone = async (payload) => {
  try {
    const res = await axiosInstance.post(
      "/api/job_seeker/phone_verify",
      payload
    );
    return res.data;
  } catch (error) {
    console.log("OTP Verify Error:", error.response?.data || error.message);
    throw error;
  }
};


export const loginUser = async (payload) => {
  try {
    const res = await axiosInstance.post(
      "/api/job_seeker/login",
      payload
    );
    return res.data;
  } catch (error) {
    console.log("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

