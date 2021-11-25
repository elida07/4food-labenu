import axios from "axios";
import { base_url } from "../constants/urls";
import { goToCreateAddress, goToFeed } from "../routes/coordinator";

export const signUp = (body, clearForm, history) => {

  axios
    .post(`${base_url}/fourFoodA/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clearForm();
      alert("Usuario cadastrado com sucesso!");
      goToCreateAddress(history)
    })
    .catch((err) => {
      alert(err.response.message);
    });
};

export const login = (body, clearForm, history) => {
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
      goToFeed(history);
    })
    .catch((err) => {
      alert(err.response.message);
      clearForm();
    });
};
