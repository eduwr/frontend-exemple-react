import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  background-color: #464646;
  padding: 20px 10px;
`;

interface ImageSliderWrapperProps {
  idxBigSlider: number;
  idxSmallSlider: number;
  arrayLenght: number;
}

export const ImageSliderWrapper = styled.div<ImageSliderWrapperProps>`
  display: flex;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  @media (min-width: 900px) {
    transform: translateX(
      ${(props) => `-${props.idxBigSlider * 3 * (100 / props.arrayLenght)}%`}
    );
  }

  @media (max-width: 900px) {
    transform: translateX(
      ${(props) => `-${props.idxSmallSlider * (100 / props.arrayLenght)}%`}
    );
  }
`;

export const ImageSlider = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;

  width: 82vw;

  @media (max-width: 900px) {
    width: 90vw;
    height: 90%;
    align-self: flex-start;
  }
`;

interface BtnProps {
  mobile?: boolean;
}

export const SliderNavBtn = styled.button<BtnProps>`
  border-radius: 25px;
  border: 1px solid green;
  outline: none;
  background-color: blue;
`;

export const ArrowIcon = styled.img<BtnProps>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  padding: 10px;
  transition: all 0.4s ease-in-out 0s;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  align-self: flex-start;
  margin-top: 150px;
  padding: 0 20px;
  justify-content: space-between;

  @media (max-width: 900px) {
    align-self: flex-end;
    margin: 0;
    padding-bottom: 20px;
    align-items: center;
    justify-content: space-around;
  }
`;
