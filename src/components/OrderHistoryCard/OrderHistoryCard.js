import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { CardContainer } from "./OrderHistoryCardStyles";
import Footer from "../Footer/Footer";

const OrderHistoryCard = ({ order }) => {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardContainer>
      <Typography
        variant="subtitle2"
        gutterBottom
        component="div"
        color="primary"
      >
        <strong>{order?.restaurantName}</strong>
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        component="div"
        color="secondary"
      >
        {order?.createdAt}
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        <strong>{currency.format(order?.totalPrice)}</strong>
      </Typography>
      <Footer />
    </CardContainer>
  );
};

export default OrderHistoryCard;
