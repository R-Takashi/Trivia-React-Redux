import styled from 'styled-components';

export const QuestionStyle = styled.section`
text-align: center;
align-items: center;
background-color: #FAFAFA;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 500px;
margin-left: 50px;
margin-right: 50px;
box-shadow: 0 4px 4px white;
border-radius: 10px;

div {
  width: 100%;
}

button{
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #463186;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: bold;

    :disabled {
      cursor: auto;
      color: #white;
      background-color: #72757e;
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
background-color: #16161a;
height: 100%;
`;
