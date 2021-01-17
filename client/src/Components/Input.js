import React from 'react';
import styled from 'styled-components/native';
import {useState} from 'react';

export default function Input(placeHolderText) {
  const [input, onInputChange] = useState();

  return (
    <LoginInput
      value={input}
      placeholder={placeHolderText}
      onChangeText={(text) => onInputChange(text)}
    />
  );
}

const LoginInput = styled.TextInput`
  height: 9%;
  width: 360px;
  border-radius: 18px;
  background-color: white;
  margin-bottom: 8%;
  text-align: center;
  font-size: 20px;
  font-family: Helvetica;
  elevation: 5;
`;
