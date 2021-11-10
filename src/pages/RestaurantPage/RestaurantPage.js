import React, { useEffect, useState, useContext } from "react";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { base_url } from "../../constants/urls";
import { headers_token } from "../../constants/headers";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { ScreenContainer, SubtitleContainer } from "./RestaurantPageStyles";
import { Typography, Divider } from "@mui/material";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { GlobalContext } from "../../context/GlobalContext";
import LinearProgress from "@mui/material/LinearProgress";

const RestaurantPage = () => {
  useProtectedPage();

  const [data, setData] = useState({ restaurant: {} });
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const {
    setHeaderName,
    setChangePage,
    setShowLine,
    restaurantInfos,
    setRestaurantInfos,
  } = useContext(GlobalContext);

  console.log(data);

  setChangePage(true);
  setHeaderName("Restaurante");
  setShowLine(true);

  setHeaderName("Restaurante");
  console.log("restaurant global", restaurantInfos);
  useEffect(() => {
    setIsLoading(true);
    getRestaurantDetails(
      `${base_url}/fourFoodA/restaurants/${params.restaurantId}`,
      headers_token
    );
  }, []);

  const getRestaurantDetails = (url, headers) => {
    axios
      .get(url, headers)
      .then((response) => {
        setData(response.data);
        setRestaurantInfos(response.data.restaurant);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const categories =
    data.restaurant &&
    data.restaurant.products &&
    data.restaurant.products.map((product) => {
      return product.category;
    });

  const filteredCategories =
    categories &&
    categories.filter((item, index) => {
      return categories.indexOf(item) === index;
    });

  const renderProductsByCategory = (category, array) => {
    const filteredArray = array.filter((item) => item.category === category);

    const renderedCards = filteredArray.map((product) => {
      return <MenuItemCard key={product.id} product={product} />;
    });

    return (
      <ScreenContainer>
        <SubtitleContainer>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ textAlign: "left", m: 0, p: 0 }}
          >
            <strong>{category}</strong>
            <Divider fullWidth sx={{ border: 1 }}></Divider>
          </Typography>
        </SubtitleContainer>
        {renderedCards}
      </ScreenContainer>
    );
  };

  const categoriesList =
    filteredCategories &&
    filteredCategories.map((category) => {
      return renderProductsByCategory(category, data.restaurant.products);
    });


  return (
    <div>
      {isLoading ? (
        <LinearProgress color="primary" />
      ) : (
        <ScreenContainer>
          <RestaurantCard restaurant={data && data.restaurant} />
        </ScreenContainer>
      )}
      {categoriesList}
    </div>
  );
};

export default RestaurantPage;
