import styled from "styled-components"
import Paper from '@mui/material/Paper';

export const DivFooter = styled.div`
    border: 1px solid black;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 8vh;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 0;
    padding: 0;

    button {
        margin: 0;
        padding: 0;
    }
`

export const PaperStyled = styled(Paper)`
    border: 1px solid #b8b8b8;
    height: 3rem;
`

export const FakeBackground = styled.div`
  height: 3rem;
  margin-top: 0.5rem;
`
