import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

// importation des composant 
import Text from './components/Text';
import TextNb from './components/TextNb';
import UploadImages from './components/UploadImages';

// importation d'image
import firePokemonCard from './assets/img/firePokemonCard.jpg'
import SelectEnergy from './components/SelectEnergy';
import SelectEnergyMulti from './components/SelectEnergyMulti';
import fireEnergyBall from './assets/img/energyBall/Fire Pokemon.jpg'
import waterEnergyBall from './assets/img/energyBall/water.jpg'
import { getSuggestedQuery } from '@testing-library/react';

// ajout d'une police spécial
<link href="http://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"></link>

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("text")
  const [energyBall, setEnergyBall] = useState(fireEnergyBall)

  // variable attack1
  const [atk1EnergyBall, setAtk1EnergyBall] = useState(fireEnergyBall)
  const [attackName1, setAttackName1] = useState("AttackName")
  const [attackDesc1, setAttackDesc1] = useState("Description")
  const [damage1, setDamage1] = useState(0)

  // variable attack2
  const [atk2EnergyBall, setAtk2EnergyBall] = useState(fireEnergyBall)
  const [attackName2, setAttackName2] = useState("AttackName")
  const [attackDesc2, setAttackDesc2] = useState("Description")
  const [damage2, setDamage2] = useState(0)

  // variable card footer
  const [weakness, setWeakness] = useState(waterEnergyBall)
  const [weaknessNb, setWeaknessNb] = useState(0)
  const [resistance, setResistance] = useState(fireEnergyBall)
  const [resistanceNb, setResistanceNb] = useState(0)
  const [retreat, setRetreat] = useState(fireEnergyBall)
  const [retreatNb, setRetreatNb] = useState(0)



  // const [energyBallMulti, setEnergyBallMulti] = useState([])

  // image
  const [imageURLs, setImageURLs] = useState([])
  
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

{/* #################### LEFT SECTION #################################################### */}
      {/* section de gauche contenant les template et carte recente */}
      <section className='leftSection'>
        section gauche
        <input type="file" />
      </section>
{/* ########################################################################################################### */}


{/* ################### CENTER SECTION ####################################################################### */}
      {/* centre de la page contenant la carte et les boutons de partage, de random et d'enregistrement */}
      <section className='centerSection'>

        {/* div contenant la carte */}
        <div className='mainCarteDiv' ref={printRef}>

          {/* header de la carte contenant le nom, pv et type d'énergie de la carte */}
          <div className='headerCardMain'>
            <p className='cardName'>{text}</p>
            <p className='pPv'><span className='pv'>pv</span> {number}</p>
            <img src={energyBall} width={30} height={30} className="energyBall EnergyBallType" />
          </div>

          {/* centre de la carte contenant l'image  */}
          <div className='imgCenterMainCard'>
            { imageURLs.map(imageSrc => <img src={imageSrc} width={"100%"} height={"100%"}/>) }
          </div>

          {/* div attaque de la carte */}
          <div className='divAtk'>

            <div className='attack1'>
              <img src={atk1EnergyBall} width={30} height={30} className="energyBall energyBallTypeAtk" />
              <div style={{width: 251.95, maxHeight: 43.2}}>
                <p className='attackDesc'><span className='attackName'>{attackName1}</span>{attackDesc1}</p>
              </div>
              <p className='damage1'>{damage1}</p>
            </div>

            <div className='attack2'>
              <img src={atk2EnergyBall} width={30} height={30} className="energyBall energyBallTypeAtk" />
              <div style={{width: 251.95, maxHeight: 43.2}}>
                <p className='attackDesc'><span className='attackName'>{attackName2}</span>{attackDesc2}</p>
              </div>
              <p className='damage1'>{damage2}</p>
            </div>
          </div>

          {/* div contenant le footer de la carte */}
          <div className='cardFooter'>
            <img src={weakness} className="energyBall " />
          </div>
        </div>

        {/* div contenant les boutons de partage et d'enregistrement*/}
        <div className='divCenterBtnDown'>
          div bas centre
          <button type='button' onClick={downloadImage}>Download as image</button>
        </div>
      </section>

{/* ##################################################################################################################" */}
      

{/* ##################### RIGHT SECTION ################################################################################### */}
      {/* section droite contenant toute la palette de modification de la carte */}
      <section className='rightSection'>
        {/*partie remplissage des stats de la carte*/}
        <div className='titre-droite'>
            <h2>Spécificités</h2>
          </div>
          
          <div className='bloc-spe'>

              <div className='nom-carte'>
                <h3>Nom de la carte</h3>
                <Text className={"nameInputText"} text={text} setText={setText} value={"text"} placeholder="name (max 14 caractères)" maxLength={14} />
              </div>

              <div className='pv-right-section'>
                <h3>Point de Vie</h3>
                <TextNb className={"pvInputNb"} number={number} value={0} setNumber={setNumber} placeholder="only number" />
              </div>

              <div className='type-pokemon'>
                <h3>Type du Pokemon</h3>
                <SelectEnergy className={"SelectEnergy"} energyBall={energyBall} setEnergyBall={setEnergyBall} />
              </div>

              <div className='image'>
                <h3>Image</h3>
                <UploadImages className={"inputImage"} imageURLs={imageURLs} setImageURLs={setImageURLs} />
              </div>

              <div className='atk'>
                <h3>Attaque 1</h3>
                <SelectEnergy className={"SelectEnergy"} atk1EnergyBall={atk1EnergyBall} setEnergyBall={setAtk1EnergyBall} />
                <div className='containerInputAtk'>
                  <TextNb className={"pvInputNb dmgInput atkInputMargin"} value={0} setNumber={setDamage1} max={999} />
                  <Text className={"nameInputText atkInputMargin"} setText={setAttackName1} value={"AttackName"} placeholder="Attackname" />
                </div>
                <Text className={"nameInputText"} setText={setAttackDesc1} value={"Description"} placeholder="Attack Description" />
              </div>

              <div className='atk'>
                <h3>Attaque 2</h3>
                <SelectEnergy className={"SelectEnergy"} atk1EnergyBall={atk1EnergyBall} setEnergyBall={setAtk2EnergyBall} />
                <div className='containerInputAtk'>
                  <TextNb className={"pvInputNb dmgInput atkInputMargin"} value={0} setNumber={setDamage2} max={999} />
                  <Text className={"nameInputText atkInputMargin"} setText={setAttackName2} value={"AttackName"} placeholder="Attackname" />
                </div>
                <Text className={"nameInputText"} setText={setAttackDesc2} value={"Description"} placeholder="Attack Description" />
              </div>

              <div className='bas-carte'>
                <h3>Bas de la carte</h3>

                <p className='downPageTitle'>Weakness</p>
                <div className='divWeakness'>
                  <SelectEnergy className={"SelectEnergy"} setEnergyBall={setWeakness} />
                  <TextNb className={"pvInputNb dmgInput atkInputMargin"} value={0} setNumber={setWeaknessNb} max={999} />
                </div>

                <p className='downPageTitle'>Resistance</p>
                <div className='divResistance'>
                  <SelectEnergy className={"SelectEnergy"} setEnergyBall={setResistance} />
                  <TextNb className={"pvInputNb dmgInput atkInputMargin"} value={0} setNumber={setResistanceNb} max={999} />
                </div>

                <p className='downPageTitle'>Retreat</p>
                <div className='divRetreat'>
                  <SelectEnergy className={"SelectEnergy"} setEnergyBall={setRetreat} />
                  <TextNb className={"pvInputNb dmgInput atkInputMargin"} value={0} setNumber={setRetreatNb} max={999} />
                </div>
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
