import styled, { keyframes } from 'styled-components';

export const HeaderText = styled.h1`
  color: rgb(83, 96, 48);
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 500px) {
    color: rgb(254, 254, 254);
    font-size: 1.5em;
  }
`;

export const SubHeadingText = styled.p`
  color: rgb(46, 60, 10);
  margin-bottom: 30px;
  font-size: 18px;
  text-align: center;
  @media (max-width: 500px) {
    color: rgb(254, 254, 254);
    font-size: 12px;
  }
`;

interface ImageProps {
  selected?: boolean;
}

export const Image = styled.img<ImageProps>`
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  position: absolute;

  opacity: ${(props) => (props.selected ? 1 : 0)};
  transition: opacity 1s ease-in-out 0.1s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  height: 250px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  z-index: 100;
  padding: 0 60px;

  @media (max-width: 500px) {
    background-color: rgb(70, 70, 70);
    height: 100px;
  }
`;

export const CarouselNavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: rgba(70, 70, 70, 0.7);
  z-index: 10;
  align-items: center;
  justify-content: center;
`;

interface NavButtonProps {
  active?: boolean;
}

export const NavButton = styled.button<NavButtonProps>`
  background-color: ${(props) =>
    props.active ? 'rgb(84, 97, 48)' : 'rgb(254, 254, 254)'};
  width: 50px;
  height: 50px;
  border-radius: 25px;

  border: 10px solid
    ${(props) => (props.active ? 'rgb(254, 254, 254)' : 'rgb(52, 52, 52)')};
  margin: 0 16px;
  outline: none;
  transition: all 1s ease-in-out 0.1s;
`;

const animateArrow = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }`;

export const ArrowBtn = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  width: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  animation-name: ${animateArrow};
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  z-index: 10;
  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;

export const BtnIcon = styled.img`
  height: 50px;
`;
