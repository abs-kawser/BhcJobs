import axiosInstance from "../axiosInstance";

export const getJobs = async () => {
  try {
    const response = await axiosInstance.get("/api/job/get");
    return response.data;
  } catch (error) {
    console.log("getJobs API Error:", error);
    throw error;
  }
};