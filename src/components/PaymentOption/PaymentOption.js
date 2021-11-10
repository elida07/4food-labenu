import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Divider } from '@mui/material';

const PaymentOption = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" sx={{ width: 400 }}><strong>Forma de pagamento</strong></FormLabel>
      <Divider fullWidth sx={{ border: 1 }}></Divider>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="cash" control={<Radio />} label="Dinheiro" />
        <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de crédito" />
      </RadioGroup>
    </FormControl>
  );
}

export default PaymentOption;