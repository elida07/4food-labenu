import React, { useContext } from "react";
import { DivHeader, PageName, BackButton, Line, HeaderContainer } from './HeaderStyles';
import { GlobalContext } from '../../context/GlobalContext'
import ArrowButton from '../ArrowButton/ArrowButton'

export default function Header() {

  const {headerName, changePage, showLine} = useContext(GlobalContext) 

  return (
    <HeaderContainer>
    <DivHeader>
          <BackButton>{changePage === true ? <ArrowButton /> : <></>}</BackButton>
          <PageName>
            <p>{headerName}</p>
          </PageName>
          </DivHeader>
          {showLine === true ? <Line><hr /></Line> : <></>}
          </HeaderContainer>
  );
}