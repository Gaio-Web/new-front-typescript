import React from "react"
import { Container } from "./styles";

interface IHeaderSectionProp {
  photoBase64: string;
  color: any;
  name: string
}

function HeaderSection({ photoBase64, name, color}: IHeaderSectionProp): JSX.Element{
  return (
    <Container>
      <header>
        <div className="nav">
          {photoBase64 == '' ? (
            <h1 style={{ color: color }}>{name}</h1>
          ) : (
            <img fetch-priority={'high'} src={photoBase64} alt={'logo'} />
          )}
        </div>
      </header>
    </Container>
  )
}
export { HeaderSection }
