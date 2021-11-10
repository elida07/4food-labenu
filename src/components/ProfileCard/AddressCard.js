import React from "react";
import { goToCreateAddress } from "../../routes/coordinator";
import { useHistory } from "react-router";
import {
  AddressContainer,
  ProfileButtonContainer,
} from "../../pages/ProfilePage/ProfilePageStyles";

const AddressCard = ({ profile }) => {
  const history = useHistory();
  return (
    <div>
      <div>{profile?.address}</div>
      <div>
        <button onClick={() => goToCreateAddress(history)}>Editar</button>
      </div>
    </div>
  );
};

export default AddressCard;
