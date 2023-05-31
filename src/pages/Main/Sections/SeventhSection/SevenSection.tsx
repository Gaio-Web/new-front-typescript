import React from 'react';
import { Container } from './styles';

interface ISeventhSectionProp {
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  mainColor: string;
  secondaryColor: string;
  neighborhood: string;

  zipCode2: string;
  street2: string;
  number2: string;
  complement2?: string;
  city2: string;
  state2: string;
  mainColor2: string;
  secondaryColor2: string;
  neighborhood2: string;
}

function SeventhSection(
  { mainColor, secondaryColor, zipCode, street, number, city, state, complement, neighborhood,
    mainColor2, secondaryColor2, zipCode2, street2, number2, city2, state2, complement2, neighborhood2,

  }: ISeventhSectionProp): JSX.Element{
    return (
        <Container>
            <div id='seventhSection' className="seventh-wrapper">
            <div className="adressWrapper">
                    <div className="userAdress">
                        <p>
                          {street}, {number} - {neighborhood},
                              <br />
                            {city}/{state}, {zipCode}
                         </p>
                    </div>
                    <button
                        className="buttonCopy"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                `${street}, ${number} - ${neighborhood}, ${city}, ${state} - ${zipCode}`
                            )
                        }
                    >
                        <div>
                            <span style={{ backgroundColor: secondaryColor }}>
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

            <div id='seventhSection' className="seventh-wrapper">
            <div className="adressWrapper">
                    <div className="userAdress">
                        <p>
                          {street2}, {number2} - {neighborhood2},
                              <br />
                            {city2}/{state2}, {zipCode2}
                         </p>
                    </div>
                    <button
                        className="buttonCopy"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                `${street2}, ${number2} - ${neighborhood2}, ${city2}, ${state2} - ${zipCode2}`
                            )
                        }
                    >
                        <div>
                            <span style={{ backgroundColor: secondaryColor }}>
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
    );
}
export { SeventhSection };
