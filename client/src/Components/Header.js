import React from 'react';
import styled from 'styled-components/native';

export default function Header({text, mt, color}) {
  return (
    <HeaderStyled mt={mt} color={color}>
      {text}
    </HeaderStyled>
  );
}

const HeaderStyled = styled.Text`
  color: ${(props) => props.color};
  font-size: 40px;
  font-family: Helvetica;
  font-weight: 700;
  text-align: center;
  margin-top: ${(props) => props.mt};
  z-index: 100;
  elevation: 4;
`;
