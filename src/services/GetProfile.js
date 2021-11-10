import axios from "axios";
import { useState, useEffect } from "react";

const useGetProfile = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    getProfile();
  }, [url]);
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      auth: token,
      "Content-Type": "application/json",
    },
  };

  const getProfile = () => {
    axios
      .get(url, header)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return [data];
};

export default useGetProfile;
