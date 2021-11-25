import React, { useContext } from "react";
import useForm from "../../Hooks/useForm";
import { goToSignUp } from "../../routes/coordinator";
import { login } from "../../services/SignupLogin";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import { Button, TextField, Typography } from "@mui/material";
import {
  ScreenContainer,
  FormContainer,
} from "./LoginPageStyles";
import logo from "../../assets/red-logo.svg";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { GlobalContext } from '../../context/GlobalContext'

const LoginPage = () => {
  useUnprotectedPage();

  const { setChangePage , setShowLine} = useContext(GlobalContext)
  const history = useHistory();

  setChangePage(false)
  setShowLine(false)

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
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clearForm, history);
    clearForm();
  };

  return (
    <ScreenContainer>
      <img src={logo} />
      <Typography
        sx={{ mt: 3 }}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        <strong>Entrar</strong>
      </Typography>
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"email"}
          type="text"
          onChange={onChange}
          label="Email"
          value={form.name}
          placeholder="email@email.com"
          required
          fullWidth
        />
        <OutlinedInput
            id="outlined-adornment-password"
            sx={{ mb: 2, maxWidth: 400 }}
            name={"password"}
            type={values.showPassword ? 'text' : 'password'}
            label="Senha"
            value={form.password}
            placeholder="Mínimo 6 caracteres"
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
          sx={{ maxWidth: 400, textTransform: "none" }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Entrar
        </Button>
      </FormContainer>
      <Button
        sx={{ mt: 3, textTransform: "none", color: "#000000" }}
        variant="text"
        onClick={() => goToSignUp(history)}
      >
        Não possui cadastro? Clique aqui
      </Button>
    </ScreenContainer>
  );
};

export default LoginPage;
