import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import ArrowButton from "../components/ArrowButton/ArrowButton";
import { useHistory } from "react-router";
import { goBack } from "../routes/coordinator";

const GlobalState = (props) => {
  const [headerName, setHeaderName] = useState("");
  const [addCart, setAddcart] = useState([]);
  const [changePage, setChangePage] = useState(false);
  const [showLine, setShowLine] = useState(true);
  const [restaurantInfos, setRestaurantInfos] = useState({});
  const [itemsAmount, setItemsAmount] = useState(0);
  const [priceToPay, setPriceToPay] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [user, setUser] = useState({});

  const history = useHistory();

  const data = {
    addCart,
    setAddcart,
    headerName,
    setHeaderName,
    changePage,
    setChangePage,
    showLine,
    setShowLine,
    restaurantInfos,
    setRestaurantInfos,
    itemsAmount,
    setItemsAmount,
    priceToPay,
    setPriceToPay,
    paymentMethod,
    setPaymentMethod,
    user,
    setUser
  };
  return (
    <div>
      <GlobalContext.Provider value={data}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalState;
