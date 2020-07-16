import React, { useRef } from 'react';
import { Container } from './styles';
import { Carousel } from '../components/Carousel';
import { Slider } from '../components/Slider';

const Main: React.FC = () => {
  const secondSessionRef = useRef<HTMLDivElement>(null);
  const handleScrollPage = (): void => {
    secondSessionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Container>
      <Carousel scrollPage={handleScrollPage} />
      <Slider ref={secondSessionRef} />
    </Container>
  );
};

export default Main;
