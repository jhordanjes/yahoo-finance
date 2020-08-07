import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Container } from './styles';

function Loading () {
  return (
    <Container>
      <AiOutlineLoading3Quarters size={35} />
      <p>Procurando dados...</p>
    </Container>
  )
}

export default Loading;
