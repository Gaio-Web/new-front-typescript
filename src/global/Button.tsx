import React from "react";
import styled, { css } from "styled-components";

interface IButtonProp {
  width?: 'small' | 'larger'; // small: 50%; larger: 100%
  children: React.ReactNode;  // button label content
  bgColor?: string;           // background color
  onClick?: any;
  type?: any;                 // button type e.g.: 'submit'
  mt?: string;                // margin top
  mb?: string;                // margin bottom
}

function StyledButton({ width, children, bgColor, onClick, type, mt, mb }: IButtonProp): JSX.Element {
  return (
    <Button width={width} style={{ backgroundColor: bgColor, marginTop: mt, marginBottom: mb }} onClick={onClick} type={type}>
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
  border-radius: 4px;
  background-color: rgb(41, 182, 10);
  color: white;
  font-weight: 600;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
`;
