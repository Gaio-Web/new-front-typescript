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
  background-color: white;
  font-family: 'Montserrat', sans-serif;

  overflow-x: hidden;
  
  
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
      position: sticky;
      z-index: 10;

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

      font-family: 'Montserrat', sans-serif;

      border: 0;

      width: 100%;
      height: 55px;

      color: #fff;
      font-size: 1.05rem;
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
      padding: 0 1.5rem 0;
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
      font-family: 'Montserrat', sans-serif;
    }

    & p{
      margin: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
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
    }

    & p{
      margin: 0;
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
    justify-content: center;
    //padding: 4rem 0;
    gap: 2rem;

    @media screen and (max-width: 800px){
      width: 80%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      color: #05377C;
      text-align: center;
      margin-top: 2rem;

      @media screen and (max-width: 800px){
        margin-top: 0;
      }

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
  }
`;

//Nossa história
export const FifthSection = styled.div`
  background-color: #f4f7fa;
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
    }

    & p {
      margin: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
    }

  }
`;

//Horário de funcionamento
export const SixthSection = styled.div`

  .sixth-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: fit-content;

    background-color: #fafafa;

    padding: 4rem 2rem;

    @media screen and (max-width: 800px){
      padding: 10% 5%;
    }

    @media screen and (min-width: 800px){
      width: 100vw;
    }

  }

  h1{
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      color: #05377C;
      text-align: center;

  }

  p{
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
  }

   .table{
      max-width: 85vw;
      background-color: #FFFFFF;
      border: 2px solid rgba(136,136,136,.2);
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
      border-radius: 15px;
      margin: 2rem 0 1rem;
            
        .header{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 85vw;
        background: #034AA6;
        height: 47px;
        border-radius: 15px 15px 0px 0px;
        padding: .5rem 0;
        }

        h2{
          font-size: 20px;
          text-align: center;
          color: #FFFFFF;
          font-weight: 700;
        }

        .line{
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #000;

          .value{
          display: flex;
          width: 50%;
          height: 60px;
          align-items: center;
          justify-content: center;

            h1{
            font-weight: 700;
            font-size: 16px;
            color: #000000;
            text-decoration: none;
            margin: 0;
            text-align: center;
            }
            
            h3{
                font-weight: 500;
            }
          }
        }

        .line:last-child{
        border: 0;
        }

    }

`;

//Endereço
export const SeventhSection = styled.div`
  background-color: #f4f7fa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .seventh-wrapper {
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
      font-weight: 500;
      font-size: 42px;
      color: #05377C;
      text-align: center;
    }

    .adressWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        font-size: 20px;
        text-align: center;
        height: fit-content;
        /* padding: 1rem 0 0; */
        width: 90vw;

        border: 2px solid rgba(136,136,136,.5);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: 20px;

        .userAdress{
          padding: 0 1rem 0.5rem;
          line-height: 2.5rem;
        }

        .buttonCopy {
          outline: 0;
          border: 0;
          display: flex;
          flex-direction: column;
          align-items: center;

          background-color: transparent;

          width: 100%;
          height: 50px;
          border-radius: 20px;
          overflow: hidden;
        }

        .buttonCopy div {
          transform: translateY(0px);
          width: 105%;
          height: 103%;
          border-radius: 20px;
        }

        .buttonCopy,
        .buttonCopy div {
          transition: 0.6s cubic-bezier(.16,1,.3,1);
          border-radius: 20px;
        }

        .buttonCopy div span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100.5%;
          border-radius: 20px;
        }

        .buttonCopy div:nth-child(1) {
          border-radius: 20px;
          background-color: #05377C;
        }

        .buttonCopy div:nth-child(2) {
          background-color: #29B60A;
          border-radius: 20px;
        }

        .buttonCopy:hover {
          box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
          border-radius: 20px;
        }

        .buttonCopy:hover div {
          transform: translateY(-50px);
          border-radius: 20px;
        }

        .buttonCopy p {
          text-align: center;
          font-size: 17px;
          font-weight: bold;
          color: #ffffff;
        }

        .buttonCopy:active {
          transform: scale(0.95);
          border-radius: 20px;
        }

  }
}


`

export const FooterSection = styled.div`

  .footer-wrapper{
    display: flex;
    padding:.5rem;
    margin-top: .5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

    h3{
      font-weight: 400;
      text-align: center;
      margin-top: .5rem;
      font-size: 12px;
  }
`