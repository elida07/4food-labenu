import React from 'react';
import { ScreenContainer } from './AddAddressPageStyles';
import useForm from '../../Hooks/useForm';
import { useHistory } from 'react-router';
import axios from 'axios';
import { base_url } from '../../constants/urls';
import { goToFeed } from '../../routes/coordinator';
import { Button, TextField, Typography } from '@mui/material';
import useProtectedPage from '../../Hooks/useProtectedPage';

const CreateAddressForm = () => {
  useProtectedPage();

  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  })

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    addAddress()
  }

  const addAddress = () => {
    console.log("form", form);
    axios
      .put(`${base_url}/fourFoodA/address`, form, {
        headers:
        {
          "auth": localStorage.getItem("token"),
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        alert("Endereço adiconado com sucesso");
        goToFeed(history);
        clear();
      })
      .catch(error => {
        alert("Desculpe, houve um erro");
        console.log(error.response)
      })
  }

  return (
    <form onSubmit={onSubmitForm}>
      <ScreenContainer>
        <Typography sx={{ mb: 2 }} variant="subtitle1" gutterBottom component="div">
          <strong>Meu endereço</strong>
        </Typography>
        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name="street"
          type="text"
          onChange={onChange}
          label="Logradouro"
          placeholder="Rua / Av"
          required
          fullWidth
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name="number"
          type="text"
          onChange={onChange}
          label="Número"
          placeholder="Número"
          required
          fullWidth
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name="complement"
          type="text"
          onChange={onChange}
          label="Complemento"
          placeholder="Complemento"
          fullWidth
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name="neighbourhood"
          type="text"
          onChange={onChange}
          label="Bairro"
          placeholder="Bairro"
          required
          fullWidth
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name="city"
          type="text"
          onChange={onChange}
          label="Cidade"
          placeholder="Cidade"
          required
          fullWidth
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name="state"
          type="text"
          onChange={onChange}
          label="Estado"
          placeholder="Estado"
          placeholder="Estado"
          required
          fullWidth
        />

        <Button
          sx={{ maxWidth: 400, textTransform: 'none' }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth>Salvar</Button>
      </ScreenContainer>
    </form>
  );
}

export default CreateAddressForm;
