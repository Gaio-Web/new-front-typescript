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
  background-color: #eee;
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
    padding: 3rem 2rem;
    margin: .5rem 0;
    gap: 2.5rem;

    border: 2px solid rgba(136,136,136,.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: .5rem;

    @media screen and (max-width: 800px){
      width: 85%;
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
      gap: 1.5rem;

      @media screen and (max-width: 800px){
          flex-direction: column;
        }
      
      & button {
        height: fit-content;
        width: 20vw;
        padding: 1rem 0;
        border-radius: 8px;
        border: none;
        background-color: #034AA3;
        cursor: pointer;

        text-transform: uppercase;
        
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px){
          width: 60vw;
        }
      }
    }

    & .image-update-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & img{
      max-width: 15vw;
      height: auto;
      border: 1px solid gray;
      padding: 1rem;
      border-radius: 10px;
      margin: 2rem 0;

      @media screen and (max-width: 800px){
        margin: 1rem 0;
        max-width: 50vw;
      }
    }

      .custom-file-upload {
        background: #034AA3;
        border-radius: 30px;
        color: white;
        font-weight: bold;
        border: 0;
        border-radius: 10px;
        padding: .5rem 2rem;
        cursor: pointer;
        
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        width: 70%;
        svg{
            margin-right: 1rem;
        }
        input[type="file"]{
            display: none;
        }

        p{
          color: white;
          font-size: 1rem;
          text-align: center;
          margin: .8rem 0;
        }
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

  & .third-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: .5rem 0;
    padding: 0;
    gap: 1rem;
    background-color: rgb(5, 55, 124);

    border: 2px solid rgba(136,136,136,.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: .5rem;

    @media screen and (max-width: 800px){
      width: 85%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      padding: 2rem;

      @media screen and (max-width: 800px){
        padding: .5rem
      }
    }

    .color-picker{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #034AA6;
        padding: 1rem 0; 

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        @media screen and (max-width: 800px){
          width: 100%;
        }

        h1{
            font-weight: 700;
            font-size: 20px;
            line-height: 29px;
            padding: 1rem 0;
            text-align: center;
            color: #FFFFFF;
        }
        .options{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 95%;
            height: 46vh;
            padding: 1.5rem 0;
            background: #FFFFFF;
            border-radius: 10px;
            flex-wrap: wrap;

            .selected{
                display: flex;
                width: 69px;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-left: 1rem;
                .color-option{
                    width: 44.12px;
                    height: 44.12px;
                    border-radius: 10.2609px;
                }
                h1{
                    font-weight: 400;
                    font-size: 14px;
                    color: #000000;
                    text-align: center;
                    padding-bottom: 0;
                }
            }
            .non-selected{
                display: flex;
                width: 69px;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-left: 1rem;
                .color-option{
                    width: 44.12px;
                    height: 44.12px;
                    border-radius: 10.2609px;
                    border: 2px solid #034AA6;
                }
                h1{
                    font-weight: 400;
                    font-size: 14px;
                    color: #000000;
                    text-align: center;
                    padding-bottom: 0;
                }
            }
        }
        p{
            font-weight: 700;
            font-size: 16px;
            line-height: 39px;
            
            text-align: center;
            text-decoration-line: underline;
            color: #FFFFFF;
            padding: 1rem;
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
      gap: 1.5rem;
      margin-bottom: 1rem;

      @media screen and (max-width: 800px){
          flex-direction: column;
        }
      
      & button {
        height: fit-content;
        width: 25vw;
        padding: 1rem 0;
        border-radius: 8px;
        border: none;
        background-color: #034AA3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px){
          width: 75vw;
        }
      }
    }

  }
`;

//ENDEREÇO
export const FourthSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .fourth-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    gap: 2.5rem;

    border: 2px solid rgba(136,136,136,.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: .5rem;
    margin: .5rem 0;

    @media screen and (max-width: 800px){
      width: 85%;
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

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      @media screen and (max-width: 800px){
          flex-direction: column;
        }
      
      & button {
        height: fit-content;
        width: 25vw;
        padding: 1rem 0;
        border-radius: 8px;
        border: none;
        background-color: #034AA3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px){
          width: 75vw;
        }
      }
    }


    & .adress-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100%;

      & .adress-input-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50vw;

        @media screen and (max-width: 800px){
          width: 75vw;
        }

        & label{
          font-size: 1rem;
          font-weight: bold;
          color: black;
          padding: 0 0 .5rem .5rem;
          width: 100%;
          text-align: start;
        }

        & input{
          height: 3rem;
          width: 95%;
          border: 1px solid black;
          border-radius: 10px;
          padding: 0 1rem;
          color: black;
          ::placeholder{
            font-size: 1rem;
          }
        }
      }

    }

    & .smaller-input-wraper{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 1rem;
      width: 50vw;
      height: 100%;
      margin: 1.5rem 0;

      @media screen and (max-width: 800px){
          width: 75vw;
          gap: 1.5rem;
        }

      & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;

      }

      & label{
          font-size: 1rem;
          font-weight: bold;
          color: black;
          padding: 0 0 .5rem .5rem;
          width: 100%;
          text-align: start;
        }

        & input{
          height: 3rem;
          width: 90%;
          border: 1px solid black;
          border-radius: 10px;
          padding: 0 1rem;
          color: black;
          ::placeholder{
            font-size: 1rem;
          }

          @media screen and (max-width: 800px){
            width: 85%;
          }
        }
      }


  }
    
`;

//TROCAR WHATSAPP
export const FifthSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .fifth-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    margin: .5rem 0;
    gap: 2.5rem;

    background-color: rgb(5, 55, 124);
    border: 2px solid rgba(136,136,136,.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: .5rem;

    @media screen and (max-width: 800px){
      width: 85%;
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

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      @media screen and (max-width: 800px){
        flex-direction: column;
      }
      
      & button {
        height: fit-content;
        width: 25vw;
        padding: 1rem 0;
        border-radius: 8px;
        border: none;
        background-color: #034AA3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px){
          width: 85vw;
        }
      }
    }

    & input{
      width: 80%;

      @media screen and (max-width: 800px){
        width: 70vw;

        padding: 1rem ;
        border: 0;
        border-radius: 10px;
        text-align: center;
        font-size: .95rem;
      }
    }
    
  }
`;

//Engloba toda as section que tem fotos
export const PicsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  margin: .5rem 0;

  width: 95%;
  height: fit-content;
  flex-direction: column;

  border: 2px solid rgba(136,136,136,.2);
  box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
  border-radius: .5rem;
  
`
export const CoverPhotoSection = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #eee;
  margin: 1rem .5rem;

  border: 2px solid rgba(136,136,136,.2);
  box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
  border-radius: .5rem;

  & .photo-section-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

    & h1{
      text-align: center;
      color: #034AA6;
    }

    & p{
      font-size: .9rem;
      text-align: center;
    }

    & img{
      width: 90%;
      border-radius: 10px;
      margin: 1rem 0;
    }

    .custom-file-upload {
      background: #034AA3;
      border-radius: 30px;
      color: white;
      font-weight: bold;
      border: 0;
      border-radius: 10px;
      padding: 0 2rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      width: 70%;
      margin: 1.5rem 0;

      svg{
          margin-right: 1rem;
      }
      input{
          display: none;
      }

      p{
        color: white;
      }
    }

    & button{
      border: 0;
      border-radius: 10px;
      background: #034AA3;

      font-size: .9rem;
      color: white;

      padding: 1rem 2rem;
    }
  }
`
export const HistoryPhotoSection = styled.div`

`
export const ProductsPhotoSection = styled.div`

`

//HORÁRIO DE FUNCIONAMENTO
//Fiz um pouco do css Inline pra evitar ficar criando novas classes.
export const SixthSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .sixth-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    height: fit-content;

    padding: 4rem 2rem;
    margin: .5rem 0;
    gap: 1rem;

    border: 2px solid rgba(136,136,136,.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: .5rem;

    @media screen and (max-width: 800px){
      width: 90%;
      padding: 10% 2%;
    }

    //Main title
    & h1{
      color: #034AA6;
      text-decoration: underline;
      text-align: center;
      margin-top: 0;
    }

    //Whole table
    & .table{
      width: 60%;
      background-color: #BDCFFF;

      padding: 2rem 1rem ;

      border-radius: 20px;

      @media screen and (max-width: 800px){
        width: 95%;
        padding: 10% 2%;
      }
      

      //Table lines
      & .line{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        & .working-hours-wrapper{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: white;
          //border-radius inline

          width: 65%;

          @media screen and (max-width: 800px){
            width: 70%;
          }

          & h2{
            font-size: 1.15rem;
            color: white;

            @media screen and (max-width: 800px){
              font-size: .9rem;
              margin: .85rem 0;
            }
          }

          & h3{
            font-size: .9rem;

            @media screen and (max-width: 800px){
              font-size: .8rem;
            }
          }

          & input{
            width: 100%;
            height: 90%;
            text-align: center;
            font-size: 1.05rem;
            border: 0;
            //border-radius inline
            //color inline

            @media screen and (max-width: 800px){
              width: 90%;
              height: 80%;
              font-size: .8rem;
            }
          }
        }

        & .title-value{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        & .value{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 4rem;
          //border-radius inline
          //border inline
          border-bottom: 1px solid gray;
        }

        & .input-wrapper{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          width: 35%;

          @media screen and (max-width: 800px){
            width: 30%;
          }

          & h2{
            font-size: 1.15rem;
            color: #034AA6;
            text-decoration: underline;

            @media screen and (max-width: 800px){
              font-size: .8rem;
            }
          }

          & .input-value{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: 0;
            width: 100%;
            height: 4rem;

            & input{
              height: 50px;
              width: 100%;
            }
          }
        }
      }


    }
  }

`;

export const SeventhSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .seventh-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    margin: .5rem 0;
    gap: 2.5rem;

    background-color: rgb(5, 55, 124);
    border: 2px solid rgba(136,136,136,.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: .5rem;

    @media screen and (max-width: 800px){
      width: 85%;
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

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      @media screen and (max-width: 800px){
        flex-direction: column;
      }
      
      & button {
        height: fit-content;
        width: 25vw;
        padding: 1rem 0;
        border-radius: 8px;
        border: none;
        background-color: #034AA3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px){
          width: 85vw;
        }
      }
    }

    & input{
      width: 80%;

      @media screen and (max-width: 800px){
        width: 70vw;

        padding: 1rem ;
        border: 0;
        border-radius: 10px;
        text-align: center;
        font-size: .95rem;
      }
    }
  }
`
