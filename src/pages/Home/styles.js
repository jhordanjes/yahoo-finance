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
    margin-bottom: 10px;
  }

  form {
    display: flex;
    align-items: left;
    flex-direction: column;
    width: 400px;
    margin-top: 40px;

    div {
      position: relative;
      margin-top: 15px;

      label {
        padding-left: 12px;
        font-size: 13px;
        color: #6001D2;
        pointer-events: none;
        position: absolute;
        top: 7px;
        left: 0;
        transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
      }
    }

    button {
      margin-top: 50px;
      width: 150px;
      height: 50px;
      border: 1px solid #6001D2;
      color: #6001D2;
      background: transparent;
      font-size: 15px;
      text-transform: uppercase;
      border-radius: 5px;
      transition: 0.5s;
      align-self: center;


      &:hover{
        color: #fff;
        background: #6001D2;
      }
    }
  }

`;
