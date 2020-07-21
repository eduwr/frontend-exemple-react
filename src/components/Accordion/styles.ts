import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  margin: 50px 7vw;
  background-color: #6e6e6e;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 730px) {
    margin: 16px 10px;
  }
`;

interface Props {
  selected?: boolean;
}

export const ListItem = styled.button<Props>`
  width: 100%;
  border: 1px solid #bdbdbd;
  background-color: ${(props) => (props.selected ? '#fff' : '#6e6e6e')};
  transition: 0.5s;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? '#fff' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

export const Title = styled.h3<Props>`
  font-size: 16px;
  margin-left: 28px;
  font-weight: bold;
  color: ${(props) => (props.selected ? '#6e6e6e' : '#fff')};
`;

export const Button = styled.div`
  border: none;
  height: 45px;
  width: 45px;
  padding: 10px;
  margin-right: 28px;
  border-radius: 50%;
  background-color: transparent;

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Arrow = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 28px;
`;

export const ItemHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemContent = styled.div<Props>`
  display: ${({ selected }) => (selected ? 'flex' : 'none')};
  align-items: center;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 730px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Image = styled.img<Props>`
  padding: 10px;
  background-color: #6e6e6e;
  width: 320px;
  height: 220px;

  @media (max-width: 730px) {
    min-width: 260px;
    height: auto;
    max-width: 100%;
  }
`;

export const Text = styled.p<Props>`
  color: #6e6e6e;
  margin-left: 28px;
  text-align: left;

  @media (max-width: 730px) {
    margin: 18px;
    text-align: center;
  }
`;
