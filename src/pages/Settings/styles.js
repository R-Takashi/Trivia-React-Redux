import styled from 'styled-components';

const SettingsStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #545454;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    color: white;
    background-color: #343434;
    width: 100%;
    padding: 30px;
    text-align: center;
  }

  h2{
    margin-top: 15px;
    color: white;
    background-color: #343434;
    padding: 30px;
    text-align: center;
    border-radius: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    justify-content: center;
    border: 1px solid white;
    border-radius: 10px;
    width: 600px;
    height: 520px;
    background-color: #343434;
    
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: white;
      width: 80%;
      padding: 15px;
      margin: 10px 0px;
      border-radius: 10px;

    }
    input {
     width: 80%; 
     text-align: center;
     font-size: 20px;
     outline: none;
     padding: 10px;
     border-radius: 10px;
     border-width: 1px;
    }
    select{
      width: 80%;
      text-align: center;
      padding: 10px;
      font-size: 17px;
      outline: none;
      border-radius: 10px;
    }

    button{
    margin-top: 5px;
    margin-bottom: 10px;
    width: 80%;
    padding: 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #CC9F38;
    text-transform: uppercase;
    font-weight: bold;
    
      :hover {
        box-shadow: 0 2px 2px white;
      }
  }
  }
`;

export default SettingsStyle;
