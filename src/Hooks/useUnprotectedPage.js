import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToFeed } from "../routes/coordinator";
// importar função de ir para o feed

const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // função de ir para o feed
      goToFeed(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
