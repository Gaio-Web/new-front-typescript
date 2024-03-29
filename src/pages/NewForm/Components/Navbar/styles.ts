import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: fixed;
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(34deg, rgba(11,12,21,0.9) 10%, rgb(5, 55, 124) 95%);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  & .option {
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    transition: all ease 0.3s;

    :hover {
      font-size: 26px;
    }
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  ${({ isVisible }: any) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;
