import axiosInstance from "../axiosInstance";

export const getIndustries = async () => {
  try {
    const response = await axiosInstance.get("/api/industry/get");
    return response.data.data; 
  } catch (error) {
    console.log("Industry API Error:", error);
    throw error;
  }
};