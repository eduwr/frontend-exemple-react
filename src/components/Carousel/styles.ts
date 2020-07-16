import styled from 'styled-components';

export const HeaderText = styled.h1`
  color: rgb(83, 96, 48);
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
`;

export const SubHeadingText = styled.p`
  color: rgb(46, 60, 10);
  margin-bottom: 30px;
  font-size: 18px;
`;

interface ImageProps {
  selected?: boolean;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  position: absolute;
  display: ${(props) => (props.selected ? 'auto' : 'none')};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
`;

export const CarouselNavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: rgba(69, 69, 69, 0.7);
  z-index: 10;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  align-self: center;
  background-color: rgba(69, 69, 69, 0.1);
  z-index: 100;
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
`;

export const ArrowBtn = styled.button`
  background-color: transparent;
  border: none;
`;

export const BtnIcon = styled.img`
  height: 50px;
`;
