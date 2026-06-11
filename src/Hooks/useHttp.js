import { useCallback, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong");
  }
  return resData;
}

export default function useHttp(initialValue) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendReq =useCallback( async function sendReq(url, config) {
    try {
      setIsLoading(true);
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  },[]);

  return {
    error,
    isLoading,
    data,
    sendReq
  };
}