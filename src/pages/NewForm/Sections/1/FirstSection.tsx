import React from "react";
import { Container } from './styles'

interface IFirstSecProps {
  call: string;
  description: string;
  imgSource: string;
}

function FirstSection({ call, description, imgSource }: IFirstSecProps): JSX.Element {
  return (
    <Container>
      <div className="first-wrapper">
      <div className="content-wrapper">
        <h1 className="title">{call}</h1>
        <p className="desc">{description}</p>
      </div>
      <div className="inputs-wrapper">

      </div>
      </div>
    </Container>
  )
}

export { FirstSection }
