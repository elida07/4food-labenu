import React from "react";
import { base_url } from "../../constants/urls";

const OrdersCard = ({ orders }) => {
  return (
    <div>
      <p>{orders.restaurantName}</p>
      <p>{orders.totalPrice}</p>
    </div>
  );
};

export default OrdersCard;
