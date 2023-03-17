import React from "react"
import { Container } from "./styles";

interface ISecondSectionProp {
  photoBase64: string;
  products: string;
  src: any;
  backgroundColor: any;
  onClick: any;
}

function SecondSection({ photoBase64, products, src, backgroundColor, onClick}: ISecondSectionProp): JSX.Element{
  return (
    <Container>
      <div className={'second-wrapper'}>
        <h1 className="sectionTitle" style={{backgroundColor: backgroundColor}}>
          O que oferecemos
        </h1>
        <p>{products}</p>
        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <img fetch-priority={'hight'} src={src} alt="Foto de exemplo do produto ou serviço" loading='lazy'/>
          ) : (
            <img fetch-priority={'hight'}
              src={photoBase64}
              alt={'foto do produto/serviço'}
              loading='lazy'
            />
          )}
        </div>
        <button onClick={onClick}>fale com a gente!</button>
      </div>
    </Container>
  )
}
export { SecondSection }
