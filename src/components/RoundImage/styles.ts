import styled, { keyframes } from 'styled-components';

const animateImage = keyframes`
   0% {
    transform: scale(1.5) translateX(50px) translateY(-50px);
  }
  50% {
    transform: scale(1) translateX(0) translateY(0);
  }

  100% {
    transform: scale(1.5) translateX(50px) translateY(-50px);
  }
`;

export const Image = styled.img`
  animation-name: ${animateImage};
  animation-timing-function: ease-in;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  max-height: 100%;
  @media (max-width: 850px) {
    min-width: 100%;
    max-height: auto;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  width: 430px;
  height: 430px;
  min-width: 430px;
  min-height: 430px;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 850px) {
    border-radius: 0;
    min-width: 100%;
  }
`;
