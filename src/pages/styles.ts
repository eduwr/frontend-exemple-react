import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ThirdSessionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  background-color: #6e6e6e;
  padding: 40px 2vw;
  @media (max-width: 850px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 20px;
  @media (max-width: 850px) {
    padding: 0 20px;
    min-height: auto;
    align-items: center;
    transform: translateY(-40px);
  }
`;

interface ParagraphProps {
  bold?: boolean;
  italic?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-size: 14px;
  margin-bottom: 20px;
  @media (max-width: 850px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
`;

export const AccordionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bdbdbd;
  min-height: 440px;
  width: 100%;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  height: 500px;
  width: 100%;
  max-width: 100vw;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

export const Triangle = styled.p`
  z-index: -10;
  position: absolute;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    border-width: 250px 50vw;
    border-style: solid;

    border-left-color: #6e6e6e;
    border-right-color: #464646;
    border-top-color: #6e6e6e;
    border-bottom-color: #464646;
  }
`;

export const SpecialContainer = styled.div`
  height: 500px;
  width: 100vw;
  max-width: 100vw;
  background-color: transparent;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: #343434;
`;

export const FooterText = styled.p`
  font-weight: bold;
  font-size: 28px;
`;
