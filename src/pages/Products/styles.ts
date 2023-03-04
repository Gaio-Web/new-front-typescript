import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
  
  & header {
    width: 100%;
  }

    .nav {
      width: auto;
      height: 60px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      
      & img {
        width: 100px;
      }
    }
`;

export const FirstSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: rgb(5, 55, 124);

  & .first-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 5%;
    gap: 2rem;

    & h1 {
      margin: 0;
      color: white;
      line-height: 1.5;
      text-align: center;
      font-family: Montserrat, sans-serif;

      @media screen and (max-width: 410px) {
        font-size: 6vw;
      }
      @media screen and (max-width: 330px) {
        font-size: 18px
      }
    }
    
    & p {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      color: #F0F0F0;
      line-height: 1.5;
      font-family: Raleway, sans-serif;

      text-align: center;
    }
    
    & img {
      max-width: 100%;
      max-height: 60vh;
      border-radius: 8px;
    }
    
    & button {
      background-color: rgb(41,182,10);
      box-shadow: 0 5px 5px 0 rgba(68, 67, 67, 0.2);

      border: 0;

      width: 100%;
      height: 55px;

      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 8px;
    }
  }


`;

export const SecondSection = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .second-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 5%;
    gap: 2rem;

    & h1 {
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      color: #05377C;
      text-align: center;
      font-family: Montserrat, sans-serif;

    }

    & p {
      margin: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
      font-family: Raleway, sans-serif;
    }

    & img {
      max-width: 100%;
      max-height: 60vh;
      border-radius: 8px;
    }

    & button {
      background-color: rgb(41,182,10);
      box-shadow: 0 5px 5px 0 rgba(68, 67, 67, 0.2);

      border: 0;

      width: 100%;
      height: 55px;

      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 8px;
    }
  }
`;

export const ThirdSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: #eee;

  & .third-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 5%;
    gap: 2rem;

    & h1{
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      color: #05377C;
      text-align: center;
      line-height: 1.5;
      font-family: Montserrat, sans-serif;
    }

    & p{
      margin: 0;
      font-family: Ralewat, sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
    }

    & img {
      max-width: 100%;
      max-height: 60vh;
      border-radius: 8px;
    }
  }
`
