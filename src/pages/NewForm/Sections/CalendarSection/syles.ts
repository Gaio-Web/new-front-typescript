import styled from 'styled-components';

//HORÁRIO DE FUNCIONAMENTO
//Fiz um pouco do css Inline pra evitar ficar criando novas classes.
export const Container = styled.div`
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
