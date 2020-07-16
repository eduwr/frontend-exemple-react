import React, { useRef } from 'react';
import { Container, SecondSession } from './styles';
import { Carousel } from '../components/Carousel';

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
      <SecondSession ref={secondSessionRef} />
    </Container>
  );
};

export default Main;
