import React from 'react';
import styled from 'styled-components/native';
import {useState} from 'react';

export default function Input(inputValue) {
  const [input, onInputChange] = useState('');

  return (
    <LoginInput value={input} onInputChange={(text) => onInputChange(text)} />
  );
}

const LoginInput = styled.TextInput`
  height: 43px;
  width: 324px;
  border-radius: 18px;
  background-color: white;
  margin-bottom: 5%;
  text-align: center;
  font-size: 25px;
  font-family: Helvetica;
`;