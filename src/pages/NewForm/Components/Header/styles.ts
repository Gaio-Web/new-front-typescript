import styled from "styled-components";

export const Container = styled.header<{ small: boolean }>`
  width: 100%;
  height: ${({ small }) => (small ? '40px' : '5rem')};
  background: rgb(5, 55, 124);

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: height 0.3s;
  transform: translateY();

  position: fixed;
  top: 0;

  box-sizing: border-box;

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      gap: 1rem;
    }

    > img {
      width: 120px;

      @media(max-width: 500px) {
        width: ${({ small }) => (small ? '70px' : '100px')};
        transition: width 0.3s;
        transform: translateX();

      }
    }

    > nav {
      display: flex;
      gap: 1rem;

      a {
        font-size: 20px;
        position: relative;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: #3CA63A;
          transition: .3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
    .mobile {
      display: none;
    }

    @media(max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  }

  @media(max-width: 700px) {
    padding: 5%;
  }
`;
