import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%;
  height: 50vh;
  align-self: center;
  padding: 0 30px;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  padding: 10px 15px;
  margin: 15px auto;
  border: 1px solid rgba(0,0,0,0.4);
  border-radius: 5px;
  @media(max-width: 768px) {
    width: 90%;
  }
  @media(min-width: 768.01px) {
    min-width: 500px;
  }
`;

const TextArea = styled.textarea`
  min-width: 200px;
  display: block;
  padding: 10px 15px;
  margin: 15px auto;
  border: 1px solid rgba(0,0,0,0.4);
  border-radius: 5px;
  @media(max-width: 768px) {
    width: 90%;
  }
  @media(min-width: 768.01px) {
    min-width: 500px;
  }
`;

const Button = styled.button`
  padding: 8px 15px;
  border: 1px solid rgba(0,0,0,0.4);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export default function Form() {
  return (
    <FormWrapper>
      <Input type="text" name="nome" placeholder="seu nome" />
      <Input type="email" name="email" placeholder="seu e-mail" />
      <TextArea name="mensagem" rows="3" placeholder="escreva sua mensagem" />
      <Button>Enviar</Button>
    </FormWrapper>
  );
}
