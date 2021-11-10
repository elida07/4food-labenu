import React, { useContext } from "react";
import useForm from "../../Hooks/useForm";
import { signUp } from "../../services/SignupLogin";
import { useHistory } from "react-router";
import { goToCreateAddress } from "../../routes/coordinator";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import { ScreenContainer, FormContainer } from "./SignUpPageStyles";
import { Button, TextField, Typography } from '@mui/material';
import logo from "../../assets/red-logo.svg";
import { GlobalContext } from '../../context/GlobalContext'

const SignUpPage = () => {
  useUnprotectedPage();

  const {setChangePage, setShowLine} = useContext(GlobalContext) 

  const history = useHistory();
  setChangePage(true)
  setShowLine(true)

  const [form, onChange, clearForm] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    signUp(form, clearForm);
    clearForm();
    goToCreateAddress(history);
  };
  return (
    <ScreenContainer>
      <img src={logo} />
      <Typography
        sx={{ mt: 3., mb: 3 }}
        variant="subtitle1"
        gutterBottom
        component="div">
        <strong>Cadastrar</strong>
      </Typography>
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"name"}
          type="text"
          onChange={onChange}
          value={form.name}
          label="Nome"
          placeholder="Nome e sobrenome"
          required
          fullWidth
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"email"}
          type="email"
          onChange={onChange}
          value={form.email}
          label="E-mail"
          placeholder="email@email.com"
          required
          fullWidth
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"cpf"}
          type="text"
          onChange={onChange}
          value={form.cpf}
          label="CPF"
          placeholder="000.000.000-00"
          required
          fullWidth
          title="Insira um CPF valido"
          pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"password"}
          type="password"
          onChange={onChange}
          value={form.passoword}
          label="Senha"
          placeholder="Mínimo 8 caracteres"
          required
          fullWidth
          id="txtPassword"
          title="Senha precisa ter minimo de 8 caracteres e pelo menos 1 letra e 1 numero"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />

        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"password"}
          type="password"
          onChange={onChange}
          value={form.passoword}
          label="Confirmar senha"
          placeholder="Confirmar a senha anterior"
          required
          fullWidth
          id="txtPassword"
          title="Senha precisa ter minimo de 8 caracteres e pelo menos 1 letra e 1 numero"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
        <Button
          sx={{ maxWidth: 400, textTransform: 'none' }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth>Criar</Button>
      </FormContainer>
    </ScreenContainer>
  );
};

export default SignUpPage;
