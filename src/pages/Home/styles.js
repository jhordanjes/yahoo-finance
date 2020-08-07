import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0 0 40px rgba(1,1,1,0.3);
  max-width: 450px;
  padding: 30px;
  border-radius: 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: rgba(1,1,1,0.5);
    font-weight: normal;
    font-size: 17px;
  }

  img {
    height: 80px;
    width: 130px;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;

    button {
      margin-top: 50px;
      width: 150px;
      height: 50px;
      border: 1px solid #6001D2;
      color: #6001D2;
      font-size: 15px;
      text-transform: uppercase;
      border-radius: 5px;
      transition: 0.5s;

      &:hover{
        color: #fff;
        background: #6001D2;
      }
    }
  }

`;
