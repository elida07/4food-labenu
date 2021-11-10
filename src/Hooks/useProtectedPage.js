import React from "react";
import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/coordinator";
// importar função de ir para login

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      //adicionar função de ir para login
      goToLogin(history);
    }
  }, [history]);
};

export default useProtectedPage;
