import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import useGetProfile from "../../services/GetProfile";
import { base_url } from "../../constants/urls";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AddressCard from "../../components/ProfileCard/AddressCard";
import OrdersCard from "../../components/ProfileCard/OrdersCard";
import useRequestData from "../../Hooks/useRequestData";
import { GlobalContext } from '../../context/GlobalContext';
import { ScreenContainer, ContainerAddress, ContainerUser, SubtitleContainer } from "./ProfilePageStyles";
import { primaryColor, secondaryColor } from '../../constants/colors';
import { Typography, Divider, Button } from "@mui/material";
import editIcon from "../../assets/edit-icon.svg";
import OrderHistoryCard from "../../components/OrderHistoryCard/OrderHistoryCard"
import { goToEditProfile, goToCreateAddress } from "../../routes/coordinator";
import { useHistory } from "react-router";


const Profile = () => {
  const order = {
    "totalPrice": 74.5,
    "restaurantName": "Habibs",
    "createdAt": 1628378579131,
    "expiresAt": 1628382179131
  }

  const history = useHistory();
  const { setHeaderName, setChangePage, setShowLine } = useContext(GlobalContext)
  const { user, setUser } = useContext(GlobalContext);

  setHeaderName('Meu Perfil')
  setChangePage(false)
  setShowLine(true)

  const [profile] = useGetProfile(
    { user: {} },
    `${base_url}/fourFoodA/profile`
  );
  setUser(profile.user);

  const orders = useRequestData([], `${base_url}/fourFoodA/orders/history`);

  const ordersList = orders[0].orders;
  console.log("ordersList", ordersList);

  const renderOrdersHistory = ordersList && ordersList.map(order => {
    console.log("order no profile", order)
    return (
      <OrderHistoryCard key={order.createdAt} order={order} />
    )
  })

  // const showPastOrders = orders.orders?.map((order) => {
  //   console.log("order", order)
  //   return <OrderHistoryCard key={order.createdAt} order={order} />;
  // });

  return (
    <ScreenContainer>
      <ContainerUser>
        <div>
          <Typography
            variant="body1"
            gutterBottom
            component="div">
            {user?.name}
          </Typography>
          <Typography
            sx={{ lineHeight: 1 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            {user?.email}
          </Typography>
          <Typography
            sx={{ lineHeight: 1 }}
            variant="body1"
            gutterBottom component="div"
          >
            {user?.cpf}
          </Typography>
        </div>
        <Button variant="text" sx={{ m: 0, p: 0 }} onClick={() => goToEditProfile(history)}>
          <img src={editIcon} />
        </Button>
      </ContainerUser>
      <ContainerAddress>
        <div>
          <Typography
            variant="body1"
            gutterBottom component="div"
            color={secondaryColor}>
            Endereço cadastrado
          </Typography>
          <Typography
            sx={{ lineHeight: 1 }}
            variant="body1"
            gutterBottom
            component="div">
            {user?.address}
          </Typography>
        </div>
        <Button variant="text" sx={{ m: 0, p: 0 }} onClick={() => goToCreateAddress(history)}>
          <img src={editIcon} />
        </Button>
      </ContainerAddress>
      <SubtitleContainer>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{ textAlign: 'left', m: 0, p: 0 }}>
          <strong>Histórico de pedidos</strong>
          <Divider fullWidth sx={{ border: 1 }}></Divider>
        </Typography>
      </SubtitleContainer>
      {renderOrdersHistory}
    </ScreenContainer >
  );
};

export default Profile;
