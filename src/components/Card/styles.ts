import styled from 'styled-components';

export const Image = styled.img`
  min-height: 200px;
  width: ${(0.9 * 82) / 3}vw;
  padding: 10px;
  background-color: #6e6e6e;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 90vw;
    margin-bottom: 20px;
    max-height: 230px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: ${82 / 3}vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 400px;

  @media (max-width: 900px) {
    width: 90vw;
    justify-content: flex-start;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
`;
