import React from "react"
import { Container } from "./styles";

interface ISeventhSectionProp {

  zipCode: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  color: any;
  onClick: any;
  backgroundColor: string;
}

function SeventhSection({ zipCode, street, number, color, backgroundColor, city, state, complement, onClick}: ISeventhSectionProp): JSX.Element{
  return (
    <Container>
      <div className="seventh-wrapper">
        <h1 className="sectionTitle" style={{ color: color }}>
          Endereço
        </h1>

        <div className="adressWrapper">
          <div className="userAdress">
            {zipCode == '' ? (
              <p>
                Rua exemplo, 45, 302, <br /> sua cidade / estado
              </p>
            ) : (
              <p>
                {street}, {number},{' '}
                {complement}
                <br />
                {city}/{state}{' '}
              </p>
            )}
          </div>

          <button
            className="buttonCopy"
            onClick={() =>
              navigator.clipboard.writeText(
                `${street}, ${number}, ${complement} ${city}, ${state}`
              )
            }
          >
            <div>
              <span style={{ backgroundColor: backgroundColor }}>
                <p>Copiar endereço</p>
              </span>
            </div>

            <div>
              <span>
                <p>Endereço copiado!</p>
              </span>
            </div>
          </button>
        </div>
      </div>
    </Container>
  )
}
export { SeventhSection }
