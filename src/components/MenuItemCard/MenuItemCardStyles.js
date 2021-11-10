import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";


export const CardContainer = styled.div`
  width: 90%;
  height: 8rem;
  display: flex;
  position: relative;
  flex-direction: row;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  margin: 0.3rem;
`

export const ImgWrapper = styled.img`
  width: 7rem;
  height: 8rem;
  object-fit: cover;
  object-position: 50% 50%;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin: 1rem;
  width: 80%;
`

export const BtnRemove = styled.button`
  color: ${primaryColor};
  background-color: white;
  border: 2px solid ${primaryColor};
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 2rem;
  width: 6rem;
  :hover{
    background-color: #e5e5e5;
    cursor: pointer;
  }
`
export const BtnAdd = styled.button`
  background-color: white;
  border: 2px solid black;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 2rem;
  width: 6rem;
  :hover{
    background-color: #e5e5e5;
    cursor: pointer;
  }
`
export const ContainerCounter = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  color: ${primaryColor};
  background-color: white;
  border: 2px solid ${primaryColor};
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  position: absolute;
  top: -1px;
  right: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`

export const ContainerButton = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
`