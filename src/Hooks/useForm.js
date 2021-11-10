import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const clearForm = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, clearForm];
};

export default useForm;
