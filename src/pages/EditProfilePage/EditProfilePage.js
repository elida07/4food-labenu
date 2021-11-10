import React, { useContext } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext';
import useRequestData from "../../Hooks/useRequestData";
import { base_url } from "../../constants/urls";

import { DivEditProfile, ContainerEditProfile, StyledButton } from "./EditProfilePageStyles";
import TextField from '@mui/material/TextField';

const EditProfilePage = () => {
  useProtectedPage();

  const { setChangePage, setHeaderName, setShowLine } = useContext(GlobalContext)

  setChangePage(true)
  setHeaderName('Editar')
  setShowLine(true)

  const data = useRequestData({}, `${base_url}/fourFoodA/profile`);
  const user = data.user
  console.log(user)

  return (
    <ContainerEditProfile>
      <DivEditProfile>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Nome"
            defaultValue="Nome"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="E-mail"
            defaultValue="email"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="CPF"
            defaultValue="555.658.477-55"
            inputProps={{ pattern: "/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/" }}
          />
        </div>
        <div>
          <StyledButton variant="contained">Salvar</StyledButton>
        </div>
      </DivEditProfile>
    </ContainerEditProfile>
  );
}

export default EditProfilePage;
