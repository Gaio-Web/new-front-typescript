import React from "react";
import styled, { css } from "styled-components";

interface IButtonProp {
  width?: 'small' | 'larger';
  children: React.ReactNode;
  bgColor?: string;
  onClick?: any;
}

function StyledButton({ width, children, bgColor, onClick }: IButtonProp): JSX.Element {
  return (
    <Button width={width} style={{ backgroundColor: bgColor }} onClick={onClick}>
      { children }
    </Button>
  )
}

export { StyledButton };

const Button = styled.button<IButtonProp>`
  height: 3rem;
  width: ${(props) => {
    if (props.width === 'small') return '50%';
    if (props.width === 'larger') return '100%';
    return 'auto';
  }};
  border: 1px solid #c4c4c42e;
  border-radius: 8px;
  background-color: rgb(41, 182, 10);
  color: white;
  font-weight: 600;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
`;
