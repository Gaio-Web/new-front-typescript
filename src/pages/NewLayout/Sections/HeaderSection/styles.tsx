import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  justify-content: space-between;

  & img {
      max-height: 75px;
      max-width: 55vw;
    }

  & h1 {
      color: rgb(5, 55, 124);
      font-size: 20px;
      margin: 0;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 600;
    }

  & i {
    svg {
    size: 80px;
  }
}

  & .nav {
    width: 100%;
    height: 100%;
    background-color: transparent;
    /* width: 100%;
    height: fit-content;
    max-height: 7vh;
    min-height: 7vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    z-index: 10; */


  }
`;
