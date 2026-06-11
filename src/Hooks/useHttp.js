import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong");
  }
  return resData;
}

export default function useHttp() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function sendReq(url, config) {
    try {
      setIsLoading(true);
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  }
  return {
    error,
    isLoading,
    data,
    sendReq
  };
}
