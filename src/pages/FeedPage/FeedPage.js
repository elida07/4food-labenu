import React, { useState, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { base_url } from "../../constants/urls";
import { GlobalContext } from "../../context/GlobalContext";
import { useHistory } from "react-router";
import { goToRestaurantDetails } from "../../routes/coordinator";
import {
  DivSearch,
  DivCategory,
  CardStyled,
  DivCardInfo,
  DivRestaurant
} from "./FeedPageStyles";
import SearchIcon from "@mui/icons-material/Search";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinearProgress from '@mui/material/LinearProgress';

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const { setHeaderName, setChangePage, setShowLine } = useContext(GlobalContext)

  setHeaderName('Ifuture')
  setChangePage(false)
  setShowLine(true)

  const [clearFilter, setClearFilter] = useState(false);

  const [data, isLoading] = useRequestData({}, `${base_url}/fourFoodA/restaurants`);

  const restaurants = data.restaurants;

  const restaurantCategory =
    restaurants &&
    restaurants.map((restaurant) => {
      return (
        <button
          onClick={() => handleCategory(restaurant.category)}
          key={restaurant.id}
        >
          {restaurant.category}
        </button>
      );
    });

  const restaurantComponents =
    restaurants &&
    restaurants
      .filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      })
      .filter((restaurant) => {
        return restaurant.category
          .toLowerCase()
          .includes(categorySearch.toLowerCase());
      })
      .map((restaurant) => {
        return (
          <CardStyled
            key={restaurant.id}
            onClick={() => goToRestaurantDetails(history, restaurant.id)}
          >
            <CardMedia
              component="img"
              height="140"
              image={restaurant.logoUrl}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary.main"
              >
                {restaurant.name}
              </Typography>
              <DivCardInfo>
                {restaurant.deliveryTime <= 20 ? (
                  <Typography variant="body1" color="secondary.main">
                    {restaurant.deliveryTime} min
                  </Typography>
                ) : (
                  <Typography variant="body1" color="secondary.main">
                    {restaurant.deliveryTime - 10} - {restaurant.deliveryTime}{" "}
                    min
                  </Typography>
                )}
                <Typography variant="body1" color="secondary.main">
                  Frete: R$:{restaurant.shipping},00
                </Typography>
              </DivCardInfo>
            </CardContent>
          </CardStyled>
        );
      });

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCategory = (value) => {
    setCategorySearch(value);
    setClearFilter(true);
  };

  const clearFilters = () => {
    setSearch("");
    setCategorySearch("");
    setClearFilter(false);
  };

  return (
    <div>
      <DivSearch>
        <SearchIcon color="secondary" />
        <input placeholder={"Restaurante"} onChange={handleSearch} />
        {clearFilter && <button onClick={clearFilters}>Limpar Filtros</button>}
      </DivSearch>

      <DivCategory>{restaurantCategory}</DivCategory>

      {isLoading ?
        (<LinearProgress color="primary" />) :
        (
          <DivRestaurant>
            {restaurantComponents && restaurantComponents.length > 0 ?
              (restaurantComponents
              ) : (
                <p>Não encontramos :(</p>
              )}
          </DivRestaurant>
        )
      }
      <Footer />
    </div>
  );
};

export default FeedPage;
