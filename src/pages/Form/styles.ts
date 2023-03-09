import styled from 'styled-components';

export const Loading = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgb(5, 55, 124);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & .loading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    gap: 2rem;
  }
  
  & h1 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    color: white;
  }
  
  & .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    background-color: white;
    border-radius: 18px;


    padding: 1rem 1.5rem;
    
    & p {
      margin: 0;
      font-size: 20px;
      font-family: Raleway, sans-serif;
    }
    & img {
      width: 150px;
    }
  }
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  font-family: 'Montserrat', sans-serif;
`;

//welcome
export const FirstSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 55, 124);

  & .first-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 1rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;

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
      font-family: 'Montserrat', sans-serif;

      text-align: center;
    }
    
  }
`;

//Logo
export const SecondSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .second-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 1rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: rgb(5, 55, 124);
      font-size: 28px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;

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
      color: #000;
      font-family: 'Montserrat', sans-serif;

      text-align: center;
    }
    
    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      
      & button {
        height: 3rem;
        width: 10rem;
        border-radius: 8px;
        border: none;
        background-color: rgb(5, 55, 124);
        cursor: pointer;
        
        font-size: 20px;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;
      }
    }
    
  }
`;

//Cores
export const ThirdSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 55, 124);

  & .third-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 1rem;

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;

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
      color: #000;
      font-family: 'Montserrat', sans-serif;

      text-align: center;
    }

    & .button-wrapper {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;

      & button {
        height: 3rem;
        width: 100%;
        border-radius: 8px;
        border: none;
        background-color: #2e96ad;
        cursor: pointer;

        font-size: 20px;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;
      }
    }

  }
`;

export const FourthSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 55, 124);

  & .fourth-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 1rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;

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
      font-family: 'Montserrat', sans-serif;

      text-align: center;
    }
    
  }
`;