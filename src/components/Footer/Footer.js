import React from "react";
import { DivButtons, PaperStyled, FakeBackground } from "./FooterStyles";
import { useHistory } from "react-router";
import { goToFeed, goToCart, goToProfile } from "../../routes//coordinator";

import BottomNavigation from '@mui/material/BottomNavigation';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Footer = () => {
  const history = useHistory();

  return (
    <div>
      <FakeBackground />
      <PaperStyled sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
          <DivButtons>
            <IconButton color="primary" aria-label="add to shopping cart" onClick={() => goToFeed(history)}>
              <HomeOutlinedIcon fontSize="large" />
            </IconButton>

            <IconButton color="primary" aria-label="add to shopping cart" onClick={() => goToCart(history)}>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </IconButton>

            <IconButton color="primary" aria-label="add to shopping cart" onClick={() => goToProfile(history)}>
              <PersonOutlineOutlinedIcon fontSize="large" />
            </IconButton>
          </DivButtons>
        </BottomNavigation>
      </PaperStyled>
    </div>

  );
};

export default Footer;
