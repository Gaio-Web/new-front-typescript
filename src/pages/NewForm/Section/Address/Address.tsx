import React, { useState } from "react";
import { Container, Header } from "../styles";
import { FaEdit } from "react-icons/fa";
import { Modal } from "./Components/Modal";

interface IAddressProps {
  userID: string | undefined
}

function Address({ userID }: IAddressProps): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <Container>

    <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
      />

      <Header>
      <h1>Endereço</h1>
      <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

    </Container>
  )
}

export { Address }
