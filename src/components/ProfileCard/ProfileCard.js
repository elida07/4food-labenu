import React from "react";
import { useHistory } from "react-router";
import {
  ProfileCardContainer,
  ProfileButtonContainer,
} from "../../pages/ProfilePage/ProfilePageStyles";
import { goToEditProfile } from "../../routes/coordinator";

const ProfileCard = ({ profile }) => {
  const history = useHistory();
  return (
    <div>
      <ProfileCardContainer>
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        <p>{profile.cpf}</p>
      </ProfileCardContainer>
      <ProfileButtonContainer>
        <button onClick={() => goToEditProfile(history)}>Editar</button>
      </ProfileButtonContainer>
    </div>
  );
};

export default ProfileCard;
