import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 40px 7vw;
  @media (max-width: 730px) {
    padding: 16px 10px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: #bdbdbd;
  align-items: center;
  padding: 0 25px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: #343434;
  margin-right: 10px;
`;

export const Input = styled.input`
  background-color: #bdbdbd;
  padding-left: 10px;
  display: flex;
  width: 100%;
  height: 50px;
`;

export const TextArea = styled.textarea`
  background-color: #bdbdbd;
  height: 170px;
  width: 100%;
  resize: none;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  @media (max-width: 730px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const SubmitButton = styled.button`
  height: 50px;
  width: 160px;
  background-color: #fff;
  border-radius: 10px;
  font-weight: bold;
  color: #343434;
  transition: background-color 0.4s ease;

  &:active {
    background-color: #bdbdbdbd;
  }
`;
