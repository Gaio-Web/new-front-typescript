import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #000;

  @media screen and (max-width: 900px) {
    position: absolute;
    top: -1%;
  }

  header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .nav {
    position: sticky;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 10;

    width: 100%;
    height: fit-content;
    height: 5dvh;
    max-height: 6dvh;
    padding: 1rem 4rem;

    background: rgba( 232, 232, 232, 0.03 );
    box-shadow: 0 2px 10px 0 rgba( 41, 41, 41, 0.07 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );

    @media screen and (max-width: 900px) {
      padding: .7rem 1rem .5rem;
      height: 4dvh;
      max-height: 4dvh;
    }

    & img {
      border-radius: 10px;
      max-height: 80%;
      max-width: 27vw;
      }

      & .instaLogo{
        width: 42px;

        @media screen and (max-width: 900px) {
          width: 32px;
        }
      }

    & h1 {
      color: #eee;
      text-align: center;
      max-width: 90%;
        @media screen and (max-width: 410px){
            font-size: 5vw;
            line-height: 2.6rem;
            font-weight: 500;
        }
        @media screen and (max-width: 330px){
            font-size:18px
        }
    }

    & .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      margin: 0;
      padding: 0;
    }
  }
}
`;
