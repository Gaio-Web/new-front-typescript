import React from 'react';
import styled from 'styled-components';

function PaymentWall(): JSX.Element {
    return (
        <Container>
            <h1>hue</h1>
        </Container>
    );
}

export { PaymentWall };

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.35);
  backdrop-filter: blur(4px);
`;
