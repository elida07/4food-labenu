import React from 'react';
import { CardContainer, ImgWrapper, TextWrapper, TextContainer } from './RestaurantCardStyles';
import { Typography } from '@mui/material';

const RestaurantCard = ({ restaurant }) => {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <CardContainer>
      <ImgWrapper src={restaurant.logoUrl} />
      <TextContainer>
        <Typography variant="subtitle2" gutterBottom component="div" color="primary">
          <strong>{restaurant.name}</strong>
        </Typography>
        <Typography variant="body2" gutterBottom component="div" color="secondary">
          {restaurant.category}
        </Typography>
        <TextWrapper>
          <Typography variant="body2" gutterBottom component="div" color="secondary">
            {restaurant.deliveryTime} min
          </Typography>
          <Typography variant="body2" gutterBottom component="div" color="secondary">
            Frete {currency.format(restaurant.shipping)}
          </Typography>
        </TextWrapper>
        <Typography variant="body2" gutterBottom component="div" color="secondary">
          {restaurant.address}
        </Typography>
      </TextContainer>
    </CardContainer>

  );
}

export default RestaurantCard;
