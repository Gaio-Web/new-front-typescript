import React, { useState } from "react";
import { Container, Header } from "../styles";
import { ColorContainer, Colors } from "./styles";
import { FaEdit } from 'react-icons/fa'
import { Modal } from "./Components/Modal";

interface IColorSectionProps {
  color: string | undefined;
  mainColor: string | undefined;
  secondaryColor: string | undefined;
  accentColor: string | undefined;

  userID?: string | undefined;
}

function ColorSection({ color, mainColor, secondaryColor, accentColor, userID }: IColorSectionProps): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <Container>
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
      />
        <Header>
        <h1>Paleta de cores</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>
      <h3>Estas são as suas atuais cores: </h3>
      <Colors>
      <ColorContainer
        bgColor={color}
        />
      <ColorContainer
        bgColor={mainColor}
        />
      <ColorContainer
        bgColor={secondaryColor}
        />
      <ColorContainer
        bgColor={accentColor}
        />
        </Colors>
    </Container>
  )
}

export { ColorSection }
