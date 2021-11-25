import React, { useContext } from "react";
import useForm from "../../Hooks/useForm";
import { signUp } from "../../services/SignupLogin";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import { ScreenContainer, FormContainer } from "./SignUpPageStyles";
import { Button, TextField, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from "../../assets/red-logo.svg";
import { GlobalContext } from '../../context/GlobalContext'
import Header from "../../components/Header/Header";

const SignUpPage = () => {
  useUnprotectedPage();

  const {setChangePage, setShowLine} = useContext(GlobalContext) 

  const history = useHistory();
  setChangePage(true)
  setShowLine(true)

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [form, onChange, clearForm] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    signUp(form, clearForm, history);
    clearForm();
  };
  
  return (
    <>
      <Header />
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
          <OutlinedInput
            id="outlined-adornment-password"
            sx={{ mb: 2, maxWidth: 400 }}
            name={"password"}
            type={values.showPassword ? 'text' : 'password'}
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            inputProps={{ pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" }}
            required
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <OutlinedInput
            id="outlined-adornment-password"
            sx={{ mb: 2, maxWidth: 400 }}
            name={"password"}
            type={values.showPassword ? 'text' : 'password'}
            label="Confirmar senha"
            value={form.password}
            placeholder="Confirme sua senha"
            inputProps={{ pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" }}
            required
            fullWidth
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            sx={{ maxWidth: 400, textTransform: 'none' }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth>Criar</Button>
        </FormContainer>
      </ScreenContainer>
    </>
  );
};

export default SignUpPage;
