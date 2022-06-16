import styled from 'styled-components';

const LoginStyle = styled.div`
  text-align: center;
  align-items: center;
  background-color: #545454;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;

  label {
    font-size: 18px;
  }

  form {
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    width: 400px;
    height: 300px;
    background-color: #343434
  }

  button{
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #CC9F38;
    text-transform: uppercase;
    font-weight: bold;
    
      :hover {
        box-shadow: 0 2px 2px white;
        padding: 11px;
      }

      :disabled {
        cursor: auto;
        color: #333533;
        background-color: #72757e;
      }
  }

  input{
    margin-bottom: 5px;
    width: 95%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    text-align: center;
  }

  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  img {
    height: 15vmin;
    pointer-events: none;
    animation: shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    margin-bottom: 30px
  }

  @keyframes shake {

    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
  
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  
`;

export default LoginStyle;
