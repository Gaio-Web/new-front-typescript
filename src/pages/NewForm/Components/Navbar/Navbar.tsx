/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

function Navbar({ menuIsVisible, setMenuIsVisible }: any) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    // @ts-ignore
    <Container isVisible={menuIsVisible} >
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <a href="#" className='option'>Primeira sessão</a>
        <a href="#" className='option'>Segunda sessão</a>
        <a href="#" className='option'>Terceira sessão</a>
        <a href="#" className='option'>Quarta sessão</a>
        <a href="#" className='option'>Sexta sessão</a>
      </nav>
    </Container>
  )
}

export { Navbar }
