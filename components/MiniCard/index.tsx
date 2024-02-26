
import React from 'react';

import { Container, Text } from './styles';

interface Props {
  onPress: () => void;
};

export default function MiniCard({onPress}: Props) {
  return (
    <Container onPress={() => onPress()}>
        <Text>行</Text>
    </Container>
  );
};