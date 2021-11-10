import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import FeedPage from "../pages/FeedPage/FeedPage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import ChartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Header from "../components/Header/Header";
import styled from "styled-components"

const Router = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/cadastro"}>
          <SignUpPage />
        </Route>

        <Route exact path={"/adicionar-endereco"}>
          <AddAddressPage />
        </Route>

        <Route exact path={"/editar-perfil"}>
          <EditProfilePage />
        </Route>

        <Route exact path={"/"}>
          <FeedPage />
        </Route>

        <Route exact path={"/restaurante/:restaurantId"}>
          <RestaurantPage />
        </Route>

        <Route exact path={"/carrinho"}>
          <ChartPage />
        </Route>

        <Route exact path={"/perfil"}>
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
