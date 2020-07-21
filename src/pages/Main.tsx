import React, { useRef } from 'react';

import { images } from '../data';

import { Carousel } from '../components/Carousel';
import { Slider } from '../components/Slider';
import { RoundImage } from '../components/RoundImage';
import { Accordion } from '../components/Accordion';
import { Form } from '../components/Form';
import {
  Container,
  ThirdSessionContainer,
  TextWrapper,
  Paragraph,
  Title,
  AccordionContainer,
  FormContainer,
  Triangle,
  Footer,
  FooterText,
  SpecialContainer,
} from './styles';

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
      <Slider ref={secondSessionRef} images={images} />
      <ThirdSessionContainer>
        <RoundImage />
        <TextWrapper>
          <Title>LOREM IPSUM</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Paragraph>
          <Paragraph bold>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Paragraph>
          <Paragraph italic>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Paragraph>
        </TextWrapper>
      </ThirdSessionContainer>
      <AccordionContainer>
        <Accordion data={images.filter((img, idx) => idx <= 4)} />
      </AccordionContainer>

      <FormContainer>
        <Form />
        <Triangle />
      </FormContainer>

      <Footer>
        <FooterText>LOREM IPSUM</FooterText>
      </Footer>
    </Container>
  );
};

export default Main;
