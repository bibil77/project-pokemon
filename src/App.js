import logo from './logo.svg';
import './App.css';
import TextNb from './components/TextNb';
import Text from './components/Text';
import { useState } from 'react';

// importation d'image
import firePokemonCard from './assets/img/firePokemonCard.jpg'

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState(null)
  return (
    <div className="App">
      {/* <div>
        <p>{number}</p>
        <TextNb number={number} setNumber={setNumber} placeholder="only number"/>
      </div>

      <div>
        <p>{text}</p>
        <Text text={text} setText={setText} placeholder="only text" />
      </div> */}

      {/* section de gauche contenant les template et carte recente */}
      <section className='leftSection'>
      section gauche
      </section>


      {/* centre de la page contenant la carte et les boutons de partage, de random et d'enregistrement */}
      <section className='centerSection'>
        {/* div contenant la carte */}
        <div className='mainCarteDiv'>
          <p className='test'>PV {number}</p>
          {/* <img className='imgCenterMainCard' src={firePokemonCard} /> */}
        </div>

        {/* div contenant les boutons de partage et d'enregistrement*/}
        <div className='divCenterBtnDown'>
          div bas centre
        </div>
      </section>

      {/* section droite contenant toute la palette de modification de la carte */}
      <section className='rightSection'>
        section droite
        <TextNb number={number} value={0} setNumber={setNumber} placeholder="only number"/>
      </section>
    </div>
  );
}

export default App;
