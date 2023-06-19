/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";

import logoImg from '../../../../assets/logo-gaio.png';
import logoVize from '../../../../assets/logoVize.png'

import { RiMenu3Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from "react";

interface IHeaderProps {
  origin: string | undefined;
  setMenuIsVisible: any;
}

export function Header({ setMenuIsVisible, origin }: IHeaderProps) {
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
      <section className="wrapper">

        {origin === 'gaio' ? (
          <img src={logoImg} alt="Logo"/>
        ) : (
          <img src={logoVize} alt="Logo"/>
        )}
        <nav>
          <a href="#first" className='option' >Primeira sessão</a>
          <a href="#second" className='option'>Segunda sessão</a>
          <a href="#third" className='option' >Terceira sessão</a>
          <a href="#fourth" className='option'>Quarta sessão</a>
          <a href="#fifth" className='option' >Quinta sessão</a>
        </nav>
      </section>

      <section>
        <GiHamburgerMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={smallNavbar ? '18' : '24px'} color="rgb(5, 55, 124)"/>
      </section>
    </Container>
  )
}
