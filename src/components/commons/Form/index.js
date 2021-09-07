import React, { useRef, useState } from 'react';
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

const InputTextMessage = styled.textarea`
  min-width: 200px;
  min-height: 80px;
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

const Message = styled.div`
  margin: 10px auto;
`;

export default function Form() {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputMessage = useRef(null);
  const [message, setMessage] = useState('');
  const subscribe = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputName.current.value,
        email: inputEmail.current.value,
        textMessage: inputMessage.current.value,
      }),
    });
    const { error } = await res.json();
    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
      return;
    }
    inputName.current.value = '';
    inputEmail.current.value = '';
    inputMessage.current.value = '';
    setMessage('Obrigado 🎉. Seus dados estão seguros e enviarei e-mail apenas se necessário. Sem Spam :)');
  };

  return (
    <FormWrapper onSubmit={subscribe}>
      <Input ref={inputName} type="text" name="nome" placeholder="seu nome" />
      <Input ref={inputEmail} type="email" name="email" placeholder="seu e-mail" />
      <InputTextMessage ref={inputMessage} type="text" name="mensagem" rows="3" placeholder="escreva sua mensagem" />
      <Message id="messageDiv">
        {message || ''}
      </Message>
      <Button>Enviar</Button>
    </FormWrapper>
  );
}
