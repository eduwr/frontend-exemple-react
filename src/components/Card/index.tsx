import React from 'react';

import { Image, Container, Description, Title } from './styles';

interface ImageInterface {
  id: number;
  uri: string;
  title: string;
  description: string;
}

interface Props {
  image: ImageInterface;
}

export const Card: React.FC<Props> = ({ image }) => (
  <Container>
    <Image src={image.uri} />
    <Title>{image.title}</Title>
    <Description>{image.description}</Description>
  </Container>
);
