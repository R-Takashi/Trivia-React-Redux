import styled from 'styled-components';

const HeaderStyle = styled.header`
height: 150px;
  display: flex;
  align-items: center;
  background-color: #463186;
  color: #fff;
  justify-content: space-between;

  img {
    display: flex;
    align-self: center;
    height: 100px;
  }

  section{
    display: flex;
    align-items: center;

    img {
      margin-left: 20px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }

  div{
    border-radius: 10px;
    border: 1px solid white;
    margin-right: 50px;
    padding: 10px;
  }

  p {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
  }

`;

export default HeaderStyle;
