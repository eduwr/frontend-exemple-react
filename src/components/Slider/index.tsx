/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/landscape1.png';
import image2 from '../../assets/images/landscape2.png';
import image3 from '../../assets/images/landscape3.png';
import arrowToLeft from '../../assets/icons/arrowToLeft.1x.png';
import arrowToRight from '../../assets/icons/arrowToRight.1x.png';
import {
  Container,
  ImageSlider,
  SliderNavBtn,
  ArrowIcon,
  ImageSliderWrapper,
  ArrowWrapper,
} from './styles';

import { Card } from '../Card';

interface ImageInterface {
  id: number;
  uri: string;
  title: string;
  description: string;
}

export const Slider = React.forwardRef<HTMLDivElement>((props, ref) => {
  const mockImageInfo = {
    title: 'LOREM IPSUM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  };

  const images: ImageInterface[] = [
    { id: 1, uri: image1, ...mockImageInfo },
    { id: 2, uri: image2, ...mockImageInfo },
    { id: 3, uri: image3, ...mockImageInfo },
    { id: 4, uri: image1, ...mockImageInfo },
    { id: 5, uri: image2, ...mockImageInfo },
    { id: 6, uri: image3, ...mockImageInfo },
    { id: 7, uri: image1, ...mockImageInfo },
    { id: 8, uri: image2, ...mockImageInfo },
    { id: 9, uri: image3, ...mockImageInfo },
  ];

  const [idxBigSlider, setIdxBigSlider] = useState<number>(0);
  const [idxSmallSlider, setIdxSmallSlider] = useState<number>(0);

  useEffect(() => {
    console.log(idxBigSlider, idxSmallSlider);
  }, [idxBigSlider, idxSmallSlider]);

  const toLeft = (): void => {
    idxBigSlider > 0 ? setIdxBigSlider(idxBigSlider - 1) : setIdxBigSlider(0);

    idxSmallSlider > 0
      ? setIdxSmallSlider(idxBigSlider - 1)
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
        <ArrowIcon src={arrowToLeft} onClick={toLeft} />
        <ArrowIcon src={arrowToRight} onClick={toRight} />
      </ArrowWrapper>
    </Container>
  );
});
