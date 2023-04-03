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
    font-family: "Montserrat", sans-serif;
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
      font-family: "Montserrat", sans-serif;
    }
    & img {
      width: 150px;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  font-family: "Montserrat", sans-serif;
`;

export const ImagePreview = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img {
      max-width: 40%;

      @media screen and (max-width: 800px) {
        max-width: 80%;
  }
    }
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

    & .send-to-site {
      width: 18rem;
      height: 3rem;
      border-radius: 8px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      margin-top: 1rem;
      gap: 1rem;

    }

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      text-align: center;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 800px) {
        font-size: 22px;
      }
    }

    & p {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      color: #f0f0f0;
      font-family: "Montserrat", sans-serif;
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
  padding-top: 2rem;
  background-color: #eee;

  & .second-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
    gap: 2.5rem;

    /* border: 2px solid rgba(136, 136, 136, 0.2); */
    /* box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2); */
    /* border-radius: 0.5rem; */

    @media screen and (max-width: 800px) {
      width: 85%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: rgb(5, 55, 124);
      font-size: 28px;
      line-height: 2.4rem;
      text-align: center;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        line-height: 2.4rem;
      }
    }

    & p {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      line-height: 1.7rem;
      color: #000;
      font-family: "Montserrat", sans-serif;

      text-align: center;
    }

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      @media screen and (max-width: 800px) {
        flex-direction: column;
      }

      & button {
        height: fit-content;
        width: fit-content;
        max-width: 85vw;
        padding: 1.2rem 2rem;
        border-radius: 8px;
        border: none;
        background-color: #034aa3;
        cursor: pointer;

        text-transform: uppercase;

        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        cursor: pointer;
          transition: all 0.3s ease;

          :hover {
            background-color: #27464D;
            transform: translateY(-5px); /* Transladar para cima */
            box-shadow: 2.2px 4px 8.50px rgba(0, 0, 0, 0.25); /* Sombra */
          }

        @media screen and (max-width: 800px) {
          width: 85vw;
        }
      }
    }

    & .image-update-wrapper
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & .teste {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (max-width: 800px) {
          width: 100%;

        }

        .custom-file-upload-firebase {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      & input[type="file"] {
        display: none;
      }

      label {
        display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 60%;
      height: 3rem;
      margin: 1rem 0 2rem;

      border: 0;
      border-radius: 8px;
      padding: 0.1rem 2rem;
      cursor: pointer;

      background: #034aa3;
      color: white;
      font-weight: 600;

      @media screen and (max-width: 800px) {
        width: 70%;
      }
      }
    }
      }

      & img {
        max-width: 50%;
        height: auto;
        border: 1px solid gray;
        padding: 1rem;
        border-radius: 8px;
        margin: 2rem 0;

        @media screen and (max-width: 800px) {
          margin: 1rem 0;
          max-width: 80%;
        }
      }

      .custom-file-upload {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 50%;
        height: 3rem;
        margin: 1rem 0;

        gap: 1rem;

        border: 0;
        border-radius: 8px;
        padding: 0.7rem 2rem;
        cursor: pointer;

        background: #034aa3;
        color: white;
        font-weight: 600;

        input[type="file"] {
          display: none;
        }

        p {
          color: white;
          font-size: 1rem;
          text-align: center;
          padding: 0.8rem 0;
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

    margin: 0.5rem 0;
    padding: 3rem 2rem;
    gap: 2.5rem;


    /* border: 2px solid rgba(136, 136, 136, 0.2); */
    /* box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2); */
    /* border-radius: 0.5rem; */

    @media screen and (max-width: 800px) {
      width: 92%;
      padding: 10% 2%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      line-height: 2.4rem;
      text-align: center;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        line-height: 2.4rem;
      }
    }

    .color-picker {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;

      border: 2px solid rgba(136, 136, 136, 0.2);
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
      border-radius: 0.5rem;

      @media screen and (max-width: 800px) {
        width: 100%;
      }

      h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 29px;
        padding: 1rem 0;
        text-align: center;
        color: #ffffff;
      }

      .options {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 95%;
        height: 100%;
        padding: 1.5rem .5rem;
        box-sizing: border-box;
        border-radius: 8px;
        flex-wrap: wrap;
        gap: 2.4rem;

        .selected {
          display: flex;
          width: 69px;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .color-option {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            width: 70px;
            height: 70px;
            border-radius: 4px;
            background-color: transparent;
            box-sizing: border-box;
            border: 3px solid #034aa6;
            overflow: hidden;

            & .mainColor{
              width: 33.3%;
              height: 100%;
            }

            & .secondaryColor{
              width: 33.3%;
              height: 100%;
            }

            & .accentColor{
              width: 33.3%;
              height: 100%;
            }
          }

          h1 {
            font-weight: 500;
            font-size: 14px;
            color: #000000;
            text-align: center;
            padding: .7rem 0 0;
          }
        }

        .non-selected {
          display: flex;
          width: 69px;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .color-option {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            width: 70px;
            height: 70px;
            border-radius: 4px;
            background-color: transparent;
            overflow: hidden;

            & .mainColor{
              width: 33.3%;
              height: 100%;
            }

            & .secondaryColor{
              width: 33.3%;
              height: 100%;
            }

            & .accentColor{
              width: 33.3%;
              height: 100%;
            }

          }

          h1 {
            font-weight: 500;
            font-size: 14px;
            color: #000000;
            text-align: center;
            padding: .7rem 0 0;
          }
        }
      }

      & .colorDemonstration{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 95%;
        gap: 2rem;
        padding: 1rem 0;

        & .demonstrationWrapper{
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;

          & .exampleSecondary{
            width: 5rem;
            height: 5rem;
            border-radius: 10rem;
          }

          & .exampleAccent{
            width: 5rem;
            height: 5rem;
            border-radius: 10rem;
          }

          & h4{
            font-weight: 500;
            text-align: center;
            color: #ffffff;
            margin: 0;
          }
        }

      }

      p {
        font-weight: 700;
        font-size: 16px;
        line-height: 39px;

        text-align: center;
        text-decoration-line: underline;
        color: #ffffff;
        padding: 1rem;
      }
    }

    & p {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      color: #000;
      font-family: "Montserrat", sans-serif;

      text-align: center;
    }

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 1rem;

      @media screen and (max-width: 800px) {
        flex-direction: column;
      }

      & button {
        height: fit-content;
        width: fit-content;
        max-width: 85vw;
        padding: 1.2rem 2rem;
        border-radius: 8px;
        border: none;
        background-color: #034aa3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px) {
          width: 85vw;
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



  & .fourth-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    gap: 2.5rem;

    @media screen and (max-width: 800px) {
      width: 85%;
      padding: 10% 5%;
    }



    & h1 {
      margin: 0;
      color: rgb(5, 55, 124);
      font-size: 28px;
      line-height: 2.4rem;
      text-align: center;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        line-height: 2.4rem;
      }
    }

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      @media screen and (max-width: 800px) {
        flex-direction: column;
      }

      & button {
        height: fit-content;
        width: fit-content;
        max-width: 85vw;
        padding: 1.2rem 2rem;
        border-radius: 8px;
        border: none;
        background-color: #034aa3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px) {
          width: 85vw;
        }
      }
    }

    & .main-adress-wrapper {
     & button {
        width: 100%;
        height: 3rem;
        border: none;
        border-radius: 8px;
        background-color: #0baf37;
        margin-top: 1.5rem;

        color: white;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.8px;

      cursor: pointer;
    }
    }

    & .adress-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100%;



      & .adress-input-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        @media screen and (max-width: 800px) {
          width: 100%;
        }

        & label {
          font-size: 1rem;
          font-weight: bold;
          color: black;
          padding: 0 0 0.5rem 0.5rem;
          width: 100%;
          text-align: start;
        }

        & input {
          height: 3rem;
          width: 95%;
          border: 1px solid black;
          border-radius: 8px;
          padding: 0 1rem;
          color: black;

          ::placeholder {
            font-size: 1rem;
          }
        }
      }
    }

    & .smaller-input-wraper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 1rem;
      width: 50vw;
      height: 100%;
      margin: 1.5rem 0;

      @media screen and (max-width: 800px) {
        width: 75vw;
        gap: 1.5rem;
      }

      & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
      }

      & label {
        font-size: 1rem;
        font-weight: bold;
        color: black;
        padding: 0 0 0.5rem 0.5rem;
        width: 100%;
        text-align: start;
      }

      & input {
        height: 3rem;
        width: 90%;
        border: 1px solid black;
        border-radius: 8px;
        padding: 0 1rem;
        color: black;

        ::placeholder {
          font-size: 1rem;
        }

        @media screen and (max-width: 800px) {
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
  background-color: rgb(5, 55, 124);

  & .fifth-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    margin: 0.5rem 0;
    gap: 2.5rem;


    @media screen and (max-width: 800px) {
      width: 85%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      line-height: 2.4rem;
      text-align: center;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        line-height: 2.4rem;
      }
    }

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      @media screen and (max-width: 800px) {
        flex-direction: column;
      }

      & button {
        height: fit-content;
        width: fit-content;
        max-width: 85vw;
        padding: 1.2rem 2rem;
        border-radius: 8px;
        border: none;
        background-color: #034aa3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px) {
          width: 85vw;
        }
      }
    }

    & input {
      width: 80%;

      @media screen and (max-width: 800px) {
        width: 70vw;

        padding: 1rem;
        border: 0;
        border-radius: 8px;
        text-align: center;
        font-size: 0.95rem;
      }
    }
  }
`;

//GALERIA
export const GaleryTest = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
   background-color: rgb(5, 55, 124);

  .custom-file-upload-firebase {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      & input[type="file"] {
        display: none;
      }

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 60%;
        height: 3rem;
        margin: 2rem 0 2rem;

        border: 0;
        border-radius: 8px;
        padding: 0.1rem 2rem;
        cursor: pointer;

        background: #034aa3;
        color: white;
        font-weight: 600;

      @media screen and (max-width: 800px) {
        width: 80%;
      }
      }
  }

  .galeryWrapper{
    width: 80%;
    box-sizing: border-box;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem;

    @media screen and (max-width: 800px) {
      width: 95%;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      flex-wrap: nowrap;
      box-sizing: border-box;
      padding: 0;
    }

    & h1{
      width: 90%;
      text-align: center;
      color: white;
      font-size: 28px;
      padding-bottom: 1rem;

      @media screen and (max-width: 800px) {
        font-size: 24px;
      }
    }


    & .imageWrapper{
      background-color: #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      width: 46%;
      height: 10rem;
      padding: 1rem;

      @media screen and (max-width: 800px) {
        width: 95%;
        padding: 0.5rem;
        box-sizing: border-box;
      }


      & img{
        max-width: 80%;
        width: auto;
        height: auto;
        max-height: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 2.2px 2.2px 6.59px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 800px) {
          max-width: 80%;
          width: auto;
          height: auto;
          max-height: 100%;
        }
      }

      & i {
        padding: 0.8rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }

`;

//Engloba toda as section que tem fotos
export const PicsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;

  @media screen and (max-width: 800px) {
    width: 95%;
    padding: 0;
  }

  & .picsTitle {
    margin: 0;
    color: #034aa6;
    font-size: 28px;
    line-height: 2.4rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;

    padding: 3rem 1rem 1rem 1rem;

    @media screen and (max-width: 800px) {
      font-size: 1.7rem;
      line-height: 2.2rem;
    }
  }
`;

export const CoverPhotoSection = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #eee;
  margin: 1rem 0.5rem;

  border: 1px solid #c4c4c4;
  box-shadow: 2.2px 2.2px 6.59px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media screen and (max-width: 800px) {
 width: 100%;
    }

  & .photo-section-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 1rem 2rem;

    & h1 {
      margin: 0;
      color: #034aa6;
      font-size: 28px;
      line-height: 2.4rem;
      text-align: center;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        line-height: 2.2rem;
      }
    }

    & .photoText {
      font-size: 0.9rem;
      text-align: center;
    }

    & .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: fit-content;
      max-width: 70%;
      max-height: 60vh;

      @media screen and (max-width: 800px) {
        max-width: 100%;
        max-height: 60vh;
      }
    }

    .custom-file-upload-firebase {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      & input[type="file"] {
        display: none;
      }

      label {
        display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 60%;
      height: 3rem;
      margin: 1rem 0 2rem;

      border: 0;
      border-radius: 8px;
      padding: 0.1rem 2rem;
      cursor: pointer;

      background: #034aa3;
      color: white;
      font-weight: 600;

      @media screen and (max-width: 800px) {
        width: 70%;
      }
      }
    }

    & img {
      max-width: 90%;
      max-height: 80vh;
      margin: 1rem 0 1.5rem;
      border-radius: 1rem;

      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    }

    .custom-file-upload {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 60%;
      margin: 1rem 0 2rem;

      border: 0;
      border-radius: 8px;
      padding: 0.1rem 2rem;
      cursor: pointer;

      background: #034aa3;
      color: white;
      font-weight: 600;

      @media screen and (max-width: 800px) {
        width: 70%;
      }

      svg {
        margin-right: 1rem;
      }

      input {
        display: none;
      }
      & .uploadText {
        color: white;
        font-size: 1rem;
        text-align: center;
        padding: 0.8rem 0;
        margin: 0;
      }
    }
  }
`;

//HORÁRIO DE FUNCIONAMENTO
//Fiz um pouco do css Inline pra evitar ficar criando novas classes.
export const SixthSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #034aa3;

  & .sixth-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    height: fit-content;

    padding: 4rem 2rem;
    margin: 0.5rem 0;
    gap: 1rem;


    @media screen and (max-width: 800px) {
      width: 90%;
      padding: 10% 2%;
    }

    & button {
      margin-top: 1.5rem;
    }

    //Main title
    & h1 {
      color: white;
      text-align: center;
      margin-top: 0;
    }

    //Whole table
    & .table {
      width: 60%;
      background-color: #bdcfff;

      padding: 2rem 1rem;

      border-radius: 16px;

      @media screen and (max-width: 800px) {
        width: 95%;
        padding: 10% 2%;
      }

      //Table lines
      & .line {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        & .working-hours-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: white;
          //border-radius inline

          width: 65%;

          @media screen and (max-width: 800px) {
            width: 70%;
          }

          & h2 {
            font-size: 1.15rem;
            color: white;

            @media screen and (max-width: 800px) {
              font-size: 0.9rem;
              margin: 0.85rem 0;
            }
          }

          & h3 {
            font-size: 0.9rem;

            @media screen and (max-width: 800px) {
              font-size: 0.8rem;
            }
          }

          & input {
            width: 100%;
            height: 90%;
            text-align: center;
            font-size: 1.05rem;
            border: 0;
            //border-radius inline
            //color inline

            @media screen and (max-width: 800px) {
              width: 90%;
              height: 80%;
              font-size: 0.8rem;
            }
          }
        }

        & .title-value {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        & .value {
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

        & .input-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 35%;
          box-sizing: border-box;

          @media screen and (max-width: 800px) {
            width: 30%;
          }

          & h2 {
            font-size: 1.15rem;
            color: #034aa6;

            @media screen and (max-width: 800px) {
              font-size: 0.8rem;
            }
          }

          & .input-value {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            box-sizing: border-box;
            height: 4rem;

            & .checkbox-wrapper {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              justify-content: center;

              & .checkbox {
                width: 30%;
                height: 30%;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`;

//PIX
export const SeventhSection = styled.div`
  display: none;
  height: fit-content;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  width: 100%;

  & .seventh-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    margin: 0.5rem 0;
    gap: 2.5rem;

    background-color: rgb(5, 55, 124);
    border: 2px solid rgba(136, 136, 136, 0.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: 0.5rem;

    @media screen and (max-width: 800px) {
      width: 85%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      font-size: 28px;
      line-height: 2.4rem;
      text-align: center;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        line-height: 2.2rem;
      }
    }

    & .button-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      @media screen and (max-width: 800px) {
        flex-direction: column;
      }

      & button {
        height: fit-content;
        width: fit-content;
        max-width: 85vw;
        padding: 1.2rem 2rem;
        border-radius: 8px;
        border: none;
        background-color: #034aa3;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        letter-spacing: 1px;

        @media screen and (max-width: 800px) {
          width: 85vw;
        }
      }
    }

    & input {
      width: 80%;

      @media screen and (max-width: 800px) {
        width: 70vw;

        padding: 1rem;
        border: 0;
        border-radius: 8px;
        text-align: center;
        font-size: 0.95rem;
      }
    }
  }
`;
