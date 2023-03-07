import React from 'react'
import {Container, FirstSection, SecondSection, ThirdSectiond} from "./styles";

function Form(): JSX.Element {
    return (
        <Container>
            <FirstSection>
                <div className={'first-wrapper'}>
                    <h1>Obrigado por confiar no nosso serviço!</h1>
                    <p>Agora, vamos finalizar seu site cadastrando suas fotos e horário de funcionamento.</p>
                </div>
            </FirstSection>
            <SecondSection>
                <div className={'second-wrapper'}>
                    <h1>Você tem uma logo que gostaria de usar no site?</h1>
                    <div className={'button-wrapper'}>
                        <button>SIM</button>
                        <button>NÃO</button>
                    </div>
                    <p>Sua logo vai subsituir o nome da loja no cabeçalho do site</p>
                </div>
            </SecondSection>
            <ThirdSectiond>
                <div className={'third-wrapper'}>
                <h1>Deseja editar a cor do site ou manter o azul original?</h1>
                <div className={'button-wrapper'}>
                    <button>MANTER ORIGINAL</button>
                    <button>EDITAR CORES</button>
                </div>
                </div>
            </ThirdSectiond>
        </Container>
    )
}

export {Form}
