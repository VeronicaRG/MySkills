import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({skill, ...rest}) => {
  return (
    <ButtonSkill {...rest}>
      <TextSkill>{skill}</TextSkill>
    </ButtonSkill>
  );
};

const ButtonSkill = styled(TouchableOpacity)`
  margin-top: 10px;
  background-color: #1f1e25;
  padding: 20px;
  border-radius: 50px;
  align-items: center;
`;

const TextSkill = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
