import styled from 'styled-components';

export const Container = styled.section`
  background-color: #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.form`
  background-color: white;
  width: 30rem;
  height: fit-content;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  gap: 1rem;

  & p {
    font-weight: 500;
  }
`;
