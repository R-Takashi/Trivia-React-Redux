import styled from 'styled-components';

const NotFoundStyle = styled.div`
  display: grid;
  grid: 'header header' 100px
        'back img' 3fr
        / 1fr 1fr;
  width: 100%;
  height: 100vh;
  background-color: #545454;
  header {
    grid-area: header;
  }
  h1{
    color: white;
    background-color: #343434;
    width: 100%;
    padding: 30px;
    text-align: center;
  }
  img {
    grid-area: img;
    margin-top: 100px;
    display: flex;
    height: 500px;
    width: 500px;
  }
  div {
    grid-area: back;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

      h2 {
      border-radius: 20px;
      background-color: #343434;
      color: white;
      width: 70%;
      padding: 30px;
      text-align: center;
      }

      button{
      margin-top: 15px;
      width: 70%;
      padding: 20px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      background-color: #CC9F38;
      text-transform: uppercase;
      font-weight: bold;
      
        :hover {
          box-shadow: 0 2px 2px white;
          padding: 21px;
        }
      }
  }
`;

export default NotFoundStyle;
