import styled from 'styled-components';

export const FinalScore = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  
  div{
    text-align: center;
    background-color: #FAFAFA;
    margin-left: 50px;
    margin-right: 50px;
    box-shadow: 0 4px 4px white;
    border-radius: 10px;
    padding: 30px;
    width: 20%;
  }
  
`;

export const FinalPhrase = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  
  h1{
    text-align: center;
    background-color: #FAFAFA;
    margin-left: 50px;
    margin-right: 50px;
    box-shadow: 0 4px 4px white;
    border-radius: 10px;
    padding: 30px;
    width: 20%;
  }
  
`;

export const Buttons = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
  
  button{
    margin-top: 20px;
    width: 500px;
    padding: 14px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #CC9F38;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: black;
    font-weight: bold;
    font-size: 20px;
  
      :hover {
        box-shadow: 0 2px 2px white;
      }
  
`;
