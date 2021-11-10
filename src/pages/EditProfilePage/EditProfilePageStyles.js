import styled from "styled-components";
import Button from '@mui/material/Button';

export const ContainerEditProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 18px 0;
`

export const DivEditProfile = styled.div`
    display: grid;
    row-gap: 18px;
    width: 95vw;

    div{
        width: 100%;
    }
`
export const StyledButton = styled(Button)`
    width: 100%;
`