import axios from "axios";
import { base_url } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const signUp = (body, clearForm) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${base_url}/fourFoodA/signup`, body, header)
    .then((res) => {
      // localStorage.setItem("token", res.data.token);
      clearForm();
      alert("Usuario cadastrado com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (body, clearForm) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${base_url}/fourFoodA/login`, body, header)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Login com sucesso!");
      clearForm();
    })
    .catch((err) => {
      console.log(err);
    });
};
