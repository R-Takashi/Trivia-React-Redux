import styled from 'styled-components';

export const RankingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  h1{
    color: white;
    background-color: #343434;
    width: 100%;
    padding: 30px;
    text-align: center;
  }

  ol {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    border: 1px solid #FAFAFA;
    border-radius: 10px;
    height: 70%;
    overflow-y: scroll;
    background-color: #343438;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
  button{
    margin-bottom: 30px;
    width: 300px;
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
    }
`;

export const RankingCard = styled.li`
  text-align: center;
  width: 80%;
  margin: 10px 20px;
  display: grid;
  grid: "rank image name score" 1fr
        /1fr 1fr 1fr 1fr;
  background-color: #CC9F38;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  h1{
    margin-left: 10px;
    grid-area: "rank";
    color: white;

  }

  img{
    grid-area: "image";
    border-radius: 50%;
  }

  h2{
    grid-area: "name";
    color: black;
  }

  p{
    grid-area: "score";
    font-weight: bold;
    font-size: 30px;
  }
`;
