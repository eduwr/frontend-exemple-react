import React from 'react';
import { Container, Image } from './styles';
import image from '../../assets/images/landscape1.png';

export const RoundImage: React.FC = () => {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
};
