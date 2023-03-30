/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Container = styled.section`
  .typewriterWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    width: 100vw;
    height: 100vh;
    background-color: black;

    font-family: 'Montserrat', sans-serif;
    font-size: 5rem;

    color: white;
  }


    & .secondTypewriterWrapper{
    font-size: 4rem;
    text-align: center;

    @media screen and (max-width: 800px){
      font-size: 3rem;
      text-align: center;
    }
  }

  & h3{
    font-size: 1.1rem;
    font-weight: 500;
    padding-top: 5rem;
  }

  & button{
    padding: 1rem 2rem;
    background-color: #034aa6;
    border-radius: 8px;
    border: 0;
    color: white;
    font-size: 1rem;

    :hover{
      background-color: #2a70cc;
    }
  }
`;
