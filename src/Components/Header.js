import React from 'react';
import styled from 'styled-components/native';

export default function Header({text}) {
  return <HeaderStyled>{text}</HeaderStyled>;
}

const HeaderStyled = styled.Text`
  color: white;
  font-size: 40px;
  font-family: Helvetica;
  font-weight: 700;
  text-align: center;
  margin-top: 20%;

  shadow-color: #000;
shadow-offset: {
	width: 0,
	height: 2,
};
shadow-opacity: 0.23;
shadow-radius: 2.62;

elevation: 4;
`;
