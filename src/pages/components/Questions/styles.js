import styled from 'styled-components';

export const QuestionStyle = styled.section`
text-align: center;
align-items: center;
background-color: #FAFAFA;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 600px;
margin-left: 50px;
margin-right: 50px;
box-shadow: 0 4px 4px white;
border-radius: 10px;

div {
  width: 100%;
}

button{
  width: 80%;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #CC9F38;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
  font-weight: bold;
  font-size: 20px;

    :hover {
      box-shadow: 0 2px 2px black;
    }

    :disabled {
      cursor: auto;
      color: black;
      padding: 14px;
      background-color: #EDD998;
    }
  }
`;

export const TimerCategory = styled.section`
text-align: center;
align-items: center;
background-color: #FAFAFA;
display: flex;
flex-direction: column;
justify-content: center;
margin: 30px 50px;
height: 100px;
border-radius: 10px;
box-shadow: 0 4px 4px white;
    h3{
      font-size: 30px
    }
`;

export const Container = styled.div`
background-color: #545454;
height: 100%;
`;
