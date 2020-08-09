import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    border: 0;
    border-bottom: 2px solid rgba(1,1,1,0.2);
    border-left: 2px solid rgba(1,1,1,0.2);
    border-right: 2px solid rgba(1,1,1,0.2);
    transition: 0.3s;

    &::placeholder {
      font-weight: normal;
    }


    ${props =>
      props.isErrored &&
        css`
          border-color: #ff5252;
        `}

    ${props =>
      props.isFocused &&
      css`
        border-color: #6001D2;
      `}

    ${props =>
      props.isFilled &&
        css`
        border-color: #6001D2;
      `}
  }

  span {
    color: #ff5252;
    font-size: 12px;
    margin-left: 12px;
  }
`;
