import React, { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        alert(error.response.data.message);
        setIsLoading(false)
      });
  }, [url]);

  return [data, isLoading];
};

export default useRequestData;
