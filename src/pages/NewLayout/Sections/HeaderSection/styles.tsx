import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;

  & img {
    max-height: 75px;
    max-width: 55vw;
  }

  & h1 {
    color: rgb(5, 55, 124);
    font-size: 24px;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 600;
  }

  & .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 0.675rem;

    & i {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        size: 80px;
      }
    }

    & a {
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      letter-spacing: 0.5px;
      font-size: 20px;

      :hover {
        text-decoration: underline;
        cursor: pointer;
        color: #294dff;
      }
    }

    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;

    & .icon {
      & p {
        display: none;
      }
    }
  }
`;
