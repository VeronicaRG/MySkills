import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button({text, ...rest}: ButtonProps) {
  return (
    <ButtonSend activeOpacity={0.7} {...rest}>
      <ButtonText>{text}</ButtonText>
    </ButtonSend>
  );
}

export default Button;

const ButtonSend = styled(TouchableOpacity)`
  background-color: #a370f7;
  padding: 15px;
  border-radius: 7px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
