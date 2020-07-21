/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import arrowToLeft from '../../assets/icons/arrowToLeft.1x.png';
import arrowToRight from '../../assets/icons/arrowToRight.1x.png';
import { ImageInterface } from '../../data';
import {
  Container,
  ImageSlider,
  ArrowIcon,
  ImageSliderWrapper,
  ArrowWrapper,
  Button,
} from './styles';

import { Card } from '../Card';

interface Props {
  images: ImageInterface[];
}

export const Slider = React.forwardRef<HTMLDivElement, Props>(
  ({ images }, ref) => {
    const [idxBigSlider, setIdxBigSlider] = useState<number>(0);
    const [idxSmallSlider, setIdxSmallSlider] = useState<number>(0);

    const toLeft = (): void => {
      idxBigSlider > 0 ? setIdxBigSlider(idxBigSlider - 1) : setIdxBigSlider(0);

      idxSmallSlider > 0
        ? setIdxSmallSlider(idxSmallSlider - 1)
        : setIdxSmallSlider(0);
    };

    const toRight = (): void => {
      idxBigSlider < images.length / 3 - 1
        ? setIdxBigSlider(idxBigSlider + 1)
        : setIdxBigSlider(images.length / 3 - 1);

      idxSmallSlider < images.length - 1
        ? setIdxSmallSlider(idxSmallSlider + 1)
        : setIdxSmallSlider(images.length - 1);
    };

    return (
      <Container ref={ref}>
        <ImageSlider>
          <ImageSliderWrapper
            idxBigSlider={idxBigSlider}
            idxSmallSlider={idxSmallSlider}
            arrayLenght={images.length}
          >
            {images.map(
              (img): JSX.Element => (
                <Card key={img.id} image={img} />
              ),
            )}
          </ImageSliderWrapper>
        </ImageSlider>
        <ArrowWrapper>
          <Button onClick={toLeft}>
            <ArrowIcon src={arrowToLeft} />
          </Button>
          <Button onClick={toRight}>
            <ArrowIcon src={arrowToRight} />
          </Button>
        </ArrowWrapper>
      </Container>
    );
  },
);
