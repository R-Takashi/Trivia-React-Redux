import styled from 'styled-components';

const NotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #545454;
  h1{
    color: white;
    background-color: #343434;
    width: 100%;
    padding: 30px;
    text-align: center;
  }
  img {
    margin-top: 100px;
    display: flex;
    height: 500px;
    width: 500px;
  }
`;

export default NotFoundStyle;
