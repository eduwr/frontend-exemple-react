import React, { useState } from 'react';

import image2 from '../../assets/images/landscape2.png';
import image3 from '../../assets/images/landscape3.png';
import image1 from '../../assets/images/landscape1.png';
import arrowDown from '../../assets/icons/arrowDown.1x.png';

import {
  HeaderText,
  Image,
  SubHeadingText,
  Container,
  CarouselNavContainer,
  TextWrapper,
  NavButton,
  ArrowBtn,
  BtnIcon,
  ItemsWrapper,
} from './styles';

interface Props {
  scrollPage?: () => void;
}

export const Carousel: React.FC<Props> = ({ scrollPage }) => {
  const images = [image1, image2, image3];

  const [imageIdx, setImageIdx] = useState<number>(0);

  return (
    <Container>
      {images.map((img, idx) => (
        <Image
          selected={idx === imageIdx}
          key={img}
          src={img}
          alt="mountains"
        />
      ))}
      <ItemsWrapper>
        <TextWrapper>
          <HeaderText>LOREM IPSUM</HeaderText>
          <SubHeadingText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </SubHeadingText>
        </TextWrapper>
        <ArrowBtn onClick={scrollPage}>
          <BtnIcon src={arrowDown} />
        </ArrowBtn>
      </ItemsWrapper>
      <CarouselNavContainer>
        {images.map((img, idx) => {
          return (
            <NavButton
              key={img}
              onClick={() => {
                setImageIdx(idx);
              }}
              active={idx === imageIdx}
            />
          );
        })}
      </CarouselNavContainer>
    </Container>
  );
};
