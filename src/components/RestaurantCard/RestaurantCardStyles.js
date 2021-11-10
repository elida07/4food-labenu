import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  margin: 0.5rem;
`

export const TextContainer = styled.div`
  margin: 0.5rem;
`

export const ImgWrapper = styled.img`
  width: 100%;
  height: 7rem;
  object-fit: cover;
  object-position: 50% 50%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`
