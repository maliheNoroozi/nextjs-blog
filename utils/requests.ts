import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getRequest = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(`${baseUrl}/${url}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const postRequest = async (
  url: string,
  data: any
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(`${baseUrl}/${url}`, data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Failed to post data");
    }
  }
};
