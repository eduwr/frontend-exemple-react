import React, { useState, useReducer, Reducer } from 'react';
import {
  FormContainer,
  Input,
  Grid,
  SubmitButton,
  TextArea,
  InputBox,
  Label,
} from './styles';

import { phoneMask } from '../../helpers/masks';

export const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <InputBox>
        <Label htmlFor="name">*Nome:</Label>
        <Input
          id="name"
          placeholder="Informe o seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </InputBox>
      <Grid>
        <InputBox>
          <Label style={{ minWidth: 55 }} htmlFor="email">
            *E-mail:
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Informe o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="phone">*Telefone:</Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(phoneMask(e.target.value))}
            placeholder="(__)____-____"
            required
          />
        </InputBox>
      </Grid>
      <InputBox style={{ padding: '25px' }}>
        <Label htmlFor="message" style={{ alignSelf: 'flex-start' }}>
          *Mensagem:
        </Label>
        <TextArea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva aqui"
          required
        />
      </InputBox>
      <SubmitButton type="submit">ENVIAR</SubmitButton>
    </FormContainer>
  );
};
