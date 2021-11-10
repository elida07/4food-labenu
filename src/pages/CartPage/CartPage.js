import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useProtectedPage from "../../Hooks/useProtectedPage";
import AddressCard from "../../components/ProfileCard/AddressCard";
import Footer from "../../components/Footer/Footer";
import useForm from "../../Hooks/useForm";
import {
  ContainerAddress,
  ContainerRestaurant,
} from "../../components/CartItemCard/CartItemCardStyles";
import { Typography } from "@mui/material";
import {
  primaryColor,
  secondaryColor,
  neutralColor,
} from "../../constants/colors";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
import PaymentOption from "../../components/PaymentOption/PaymentOption";
import { FakeBackground } from "./CartPageStyles";

const ChartPage = () => {
  useProtectedPage();

  const {
    addCart,
    setAddcart,
    setHeaderName,
    restaurantInfos,
    setChangePage,
    setShowLine,
    priceToPay,
    setPriceToPay,
    paymentMethod,
    setPaymentMethod,
  } = useContext(GlobalContext);

  // const [form, onChange, clearForm] = useForm({
  //   produtcts: [
  //     {
  //       id: addCart[0].id,
  //       quantity: addCart[0].amount,
  //     },
  //   ],
  //   paymentMethod: "",
  // });

  const deliveryFee = restaurantInfos.shipping;
  setHeaderName("Meu carrinho");
  setChangePage(false);
  setShowLine(true);

  // console.log("addCart:", addCart[0].id, "addCart amount:", addCart[0].amount);
  useEffect(() => {
    let newPrice = 0;
    addCart.forEach((item) => {
      newPrice += item.price * item.amount;
    });
    setPriceToPay(newPrice);
  }, [addCart]);

  const removeItem = (itemToRemove) => {
    const position = addCart.findIndex((item) => {
      return item.id === itemToRemove.id;
    });

    let newCart = [...addCart];

    if (newCart[position].amount === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].amount -= 1;
    }

    setAddcart(newCart);
  };

  const showCart =
    addCart.length === 0 ? (
      <h1>Carrinho Vazio</h1>
    ) : (
      addCart.map((product) => {
        return (
          <CartItemCard
            key={product.id}
            product={product}
            amount={product.amount}
            removeItem={() => removeItem(product)}
          />
        );
      })
    );

  return (
    <div>
      <ContainerAddress>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          color={secondaryColor}
        >
          Endereço de entrega
        </Typography>
        <Typography
          sx={{ lineHeight: 0.5 }}
          variant="body1"
          gutterBottom
          component="div"
        >
          Rua blablabla
        </Typography>
      </ContainerAddress>
      <ContainerRestaurant>
        {restaurantInfos && addCart.length > 0 ? (
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            color={primaryColor}
          >
            {restaurantInfos.name}
          </Typography>
        ) : null}
        {restaurantInfos && addCart.length > 0 ? (
          <Typography
            sx={{ lineHeight: 1 }}
            variant="body1"
            gutterBottom
            component="div"
            color={secondaryColor}
          >
            {restaurantInfos.address}
          </Typography>
        ) : null}
        {restaurantInfos && addCart.length > 0 ? (
          <Typography
            sx={{ lineHeight: 1 }}
            variant="body1"
            gutterBottom
            component="div"
            color={secondaryColor}
          >
            {restaurantInfos.deliveryTime} min
          </Typography>
        ) : null}
      </ContainerRestaurant>
      {/* {addCart.length > 0 ? <AddressCard /> : null} */}
      {showCart}

      {deliveryFee && addCart.length > 0 ? (
        <p>Frete: R$ {deliveryFee.toFixed(2)}</p>
      ) : null}
      {priceToPay ? <p>SUBTOTAL: R$ {priceToPay.toFixed(2)}</p> : null}
      <PaymentOption />
      <Footer />
    </div>
  );
};

export default ChartPage;
