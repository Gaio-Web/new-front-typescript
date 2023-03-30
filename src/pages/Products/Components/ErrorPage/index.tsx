import { Container } from './styles';
import Typewriter from 'typewriter-effect';

const typewriter404 = () => {
  return(
    <Container>
      <div className='typewriterWrapper' style={{backgroundColor:'black'}}>

        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('404')
              .pauseFor(300)
              .callFunction(() => {
                const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
                if (cursor) {
                  cursor.style.display = 'none';
                }
              })
              .start();
          }}
        />

        <div className='secondTypewriterWrapper'>
          <Typewriter
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter.typeString('Página não encontrada!')
                  .pauseFor(300)
                  .callFunction( function() {
                    const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
                    if (cursor) {
                      cursor.style.display = 'none';
                    }
                  })
                  .start();
              }, 1500);
            }}
          />
        </div>

        <h3>Confira se o link acessado está correto!</h3>

        <button>Suporte</button>

      </div>
    </Container>
  );
};

export default typewriter404;

