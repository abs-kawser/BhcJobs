import axiosInstance from "../axiosInstance";

export const getCompanies = async () => {
  try {
    const response = await axiosInstance.get("/api/company/get");
    return response.data.data; 
  } catch (error) {
    console.log("Company API Error:", error);
    throw error;
  }
};