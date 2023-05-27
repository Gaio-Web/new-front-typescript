/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";

import logoImg from '../../../../assets/logo-gaio.png';

import { RiMenu3Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from "react";

export function Header({ setMenuIsVisible }: any) {
  const [smallNavbar, setSmallNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSmallNavbar(true);
      } else {
        setSmallNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container small={smallNavbar}>
      <section>
        <img src={logoImg} alt="Logo"/>
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </nav>
      </section>

      <section>
        <GiHamburgerMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={'24px'} color="white"/>
      </section>
    </Container>
  )
}
