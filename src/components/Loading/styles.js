import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(100deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 253, 253, 0.3);
  color: #6001D2;

  p{
    font-weight: bold;
    margin-top: 10px;
    text-transform: uppercase;
  }

  svg {
    animation: ${loading} 0.7s linear infinite;
  }
`;
