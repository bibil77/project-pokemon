import logo from './logo.svg';
import './App.css';
import TextNb from './components/TextNb';
import Text from './components/Text';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

// importation d'image
import firePokemonCard from './assets/img/firePokemonCard.jpg'
import SelectEnergy from './components/SelectEnergy';
import SelectEnergyMulti from './components/SelectEnergyMulti';

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState(null)
  const [energyBall, setEnergyBall] = useState(null)
  const [energyBallMulti, setEnergyBallMulti] = useState([])
  
  //--------script pour télécharger ce qu'il y a dans la div mainCardDiv----------------------------------------------
  const printRef = useRef();

  const downloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
// -----------------------------------------------------------------------------------------------------------

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
    <TextNb number={number} value={0} setNumber={setNumber} placeholder="only number"/>
    <SelectEnergy energyBall={energyBall} setEnergyBall={setEnergyBall} />
      </section>


      {/* centre de la page contenant la carte et les boutons de partage, de random et d'enregistrement */}
      <section className='centerSection'>

        {/* div contenant la carte */}
        <div className='mainCarteDiv' ref={printRef}>
          <p className='pv'>PV {number}</p>
          {/* <img className='imgCenterMainCard' src={firePokemonCard} /> */}
        <img src={energyBall} width={30} height={30} className="EnergyBallFaiblesse" />
        </div>

        {/* div contenant les boutons de partage et d'enregistrement*/}
        <div className='divCenterBtnDown'>
          div bas centre
          <button type='button' onClick={downloadImage}>Download as image</button>
        </div>
      </section>

{/* ##################################################################################################################" */}
      {/* section droite contenant toute la palette de modification de la carte */}
      <section className='rightSection'>
        {/*partie remplissage des stats de la carte*/}
        <div className='titre-droite'>
            <h2>Spécificités</h2>
          </div>
          
          <div className='bloc-spe'>

              <div className='nom-carte'>
                <h3>Nom de la carte</h3>
              </div>

              <div className='pv-right-section'>
                <h3>Point de Vie</h3>
              </div>

              <div className='type-pokemon'>
                <h3>Type du Pokemon</h3>
              </div>

              <div className='atk'>
                <h3>Attaque</h3>
              </div>

              <div className='bas-carte'>
                <h3>Bas de la carte</h3>
              </div> 

          </div>

          <div className='bloc-spe'>

              <div className='nom-carte'>
                <h3>Nom de la carte</h3>
              </div>

              <div className='pv-right-section'>
                <h3>Point de Vie</h3>
              </div>

              <div className='type-pokemon'>
                <h3>Type du Pokemon</h3>
              </div>

              <div className='atk'>
                <h3>Attaque</h3>
              </div>

              <div className='bas-carte'>
                <h3>Bas de la carte</h3>
              </div> 

          </div>

        {/* <SelectEnergyMulti energyBallMulti={energyBallMulti} setEnergyBallMulti={setEnergyBallMulti} />
        <img src={energyBallMulti[0]} width={30} height={30} style={{borderRadius: 17}} />
        <img src={energyBallMulti[1]} width={30} height={30} style={{borderRadius: 17}} /> */}
      </section>


      
    
    
    
    </div>
  );
}

export default App;
