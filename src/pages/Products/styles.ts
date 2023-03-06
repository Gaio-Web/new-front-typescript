import styled from 'styled-components';


export const Loading = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #eee;
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
    font-family: Montserrat, sans-serif;
    font-size: 32px;
  }
  
  & .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    
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
  background-color: green;
  font-family: 'Montserrat', sans-serif;
  
  & header {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .nav {
      background-color: white;
      width: 100%;
      height: fit-content;
      max-height: 7vh;
      min-height: 7vh;
      padding: 1rem;
      box-shadow: -1px 3px 4px 0 rgba(68, 67, 67, 0.3);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      position: fixed;


      & img {
        width: 120px;
      }
    }
  }


  //global styles
  & .pgImg{
    max-width: 100%;
    max-height: 60vh;
    border-radius: 16px;
    margin-bottom: .8rem;
  }

  & button {
      cursor: pointer;
      background-color: rgb(41,182,10);
      box-shadow: 0 5px 5px 0 rgba(68, 67, 67, 0.2);

      border: 0;

      width: 100%;
      height: 55px;

      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 16px;
    }
  
`;


//Banner
export const FirstSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 55, 124);

  & .first-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 2rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      line-height: 40px;
      text-align: center;
      padding: 2rem 1.5 0;
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
      line-height: 33px;
      font-family: 'Montserrat', sans-serif;

      text-align: center;
    }
    
  }

`;

//O que oferecemos
export const SecondSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .second-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 2rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

    & h1{
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      color: #05377C;
      text-align: center;
      line-height: 50px;
    }

    & p{
      margin: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
    }


  }
`

//Diferenciais
export const ThirdSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f7fa;

  & .third-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 2rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

    & .difCards{
      display: flex;
      width: 80%;
      border: 2px solid rgba(136,136,136,.2);
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
      border-radius: .5rem;
      flex-direction: column;
      align-items: center;
      padding: 3.5rem 1.5rem;
    }

    & svg{
      width: 70px;
    }

    & h1{
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      width: 95%;
      color: #05377C;
      text-align: center;
      line-height: 1.5;
      font-family: Montserrat, sans-serif;
    }

    & p{
      margin: 0;
      font-family: Ralewat, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      width: 90%;
    }

  }
`

//Galeria de fotos
export const FourthSection = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fourth-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    //padding: 10% 5%;
    gap: 2rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

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
  }
`;

//Nossa história
export const FifthSection = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fifth-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    //padding: 10% 5%;
    gap: 2rem;

    @media screen and (max-width: 800px){
      width: 100%;
      padding: 10% 5%;
    }

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

  }
`;

//Horário de funcionamento


//Endereço

