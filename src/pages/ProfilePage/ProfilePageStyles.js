import styled from "styled-components";
import { primaryColor, secondaryColor, neutralColor } from "../../constants/colors";

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20%;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  padding: 4px;
`;

export const ProfileButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const AddressContainer = styled.div`
  background-color: ${secondaryColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20%;
  margin: 1rem 0;
  font-family: Roboto;
  padding: 1rem;
  background-color: #eee;
  p {
    width: 20.5rem;
    height: 1.125rem;
    margin: 0 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`;

export const ContainerAddress = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${neutralColor};
  width: 100%;
  height: 5.5rem;
  padding: 1rem;
  padding-right: 0;
  box-sizing: border-box;

  img{
    margin-top: 1rem;
  }
`

export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding: 1rem;
  padding-right: 0;
  box-sizing: border-box; 

  img{
    margin-top: 1rem;
  }
`

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: left;
  margin-top: 0.8rem;
  margin-bottom: 0.2rem;
`