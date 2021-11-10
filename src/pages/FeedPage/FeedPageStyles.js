import styled from "styled-components";
import Card from '@mui/material/Card';

export const DivImg = styled.div`
    max-height: 40vh;
    max-width: 90vw;
    img{
        object-fit: contain;
        max-height: 80%;
        width: 100%;
    }
`
export const DivSearch = styled.div`
    border: 1px solid #b8b8b8;
    border-radius: 2px;
    height: 3.5rem;
    margin: 8px 1rem;
    padding: 0 0.503rem;
    
    display: flex;
    align-items: center;
    input {
        border: none;
        padding-left: 8px;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #d0d0d0;
    }

    button {
        border: none;
        border-radius: 8px;
        color: #ffffff;
        background-color: #e8222e;
        height: 60%;
        width: 20%;
        font-weight: bold;
    }
`
export const DivCategory = styled.div`
    overflow: overlay;
    padding: 8px;
    display: grid;
    grid-auto-flow: column;
    align-items: center;

    button {
        border: none;
        background-color: transparent;
        height: 8vh;
        font-size: 1rem;
        margin: 0 12.5px;
        :focus{
            color: #e8222e;
            border-bottom: 2px solid #e8222e;
        }
    }
`
export const CardStyled = styled(Card)`
    border: 1px solid #b8b8b8;
    margin-bottom: 2vh;
`
export const DivCardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DivRestaurant = styled.div`
    padding: 4px 20px;
`