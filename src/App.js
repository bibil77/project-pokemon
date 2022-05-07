import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

// importation des composant 
import Text from './components/Text';
import TextNb from './components/TextNb';
import UploadImages from './components/UploadImages';
import Template from './components/Template';

// importation d'image
import firePokemonCard from './assets/img/firePokemonCard.jpg'
import naturePokemonCard from './assets/img/naturePokemonCard.jpg'
import SelectEnergy from './components/SelectEnergy';
import SelectEnergyMulti from './components/SelectEnergyMulti';
import fireEnergyBall from './assets/img/energyBall/Fire Pokemon.jpg'
import waterEnergyBall from './assets/img/energyBall/water.jpg'

// ajout d'une police spécial
<link href="http://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"></link>

function App() {
  // variale composant
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("text")
  const [energyBall, setEnergyBall] = useState(fireEnergyBall)
  const [background, setBackground] = useState(firePokemonCard)

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

        {/* title template */}
        <div className='divTitleTemplate divTitle'>
          <h2 className='titleTemplate'>Template</h2>
        </div>


        {/* container de template */}
        <div className='templateContainer'>
          <Template src={firePokemonCard} setBackground={setBackground} template={firePokemonCard} />
          <Template src={naturePokemonCard} setBackground={setBackground} template={naturePokemonCard} />
          <Template src={firePokemonCard} setBackground={setBackground} template={firePokemonCard} />
          <Template src={naturePokemonCard} setBackground={setBackground} template={naturePokemonCard} />
          <Template src={firePokemonCard} setBackground={setBackground} template={firePokemonCard} />
          <Template src={naturePokemonCard} setBackground={setBackground} template={naturePokemonCard} />
        </div>

        {/* title cartes sauvegardés */}
        <div className='divTitleSave divTitle'>
          <h2 className='titleTemplate'>Cartes sauvegardés</h2>
        </div>

      </section>
{/* ########################################################################################################### */}


{/* ################### CENTER SECTION ####################################################################### */}
      {/* centre de la page contenant la carte et les boutons de partage, de random et d'enregistrement */}
      <section className='centerSection'>

        {/* div contenant la carte */}
        <div className='divHeaderCenter'>
          <img className='imgHeaderCenter iconPartage' src="https://img.icons8.com/fluency-systems-regular/56/000000/share.png"/>
          <img className='imgHeaderCenter iconDownload' onClick={downloadImage} src="https://img.icons8.com/pastel-glyph/64/000000/download--v1.png"/>
        </div>
        <div className='mainCarteDiv' ref={printRef} style={{backgroundImage: `url(${background})`}}>

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

            {/* div card weakness */}
            <div className='divCardWeakness'>
              <img src={weakness} className="energyBallFooter " />
              <p className='pCardWeakness'>X   {weaknessNb}</p>
            </div>

            {/* div resistance and retreat */}
            <div className='divContainerRR'>
              <div className='divCardResistance'>
                <img src={resistance} className="energyBallFooter " />
                <p className='pCardResistance'>X  {resistanceNb}</p>
              </div>

              <div className='divCardRetreat'>
                <img src={retreat} className="energyBallFooter " />
                <p className='pCardRetreat'>X  {retreatNb}</p>
              </div>
            </div>
          </div>
        </div>
{/* ################################################################################################## */}


        {/* div contenant les boutons de partage et d'enregistrement*/}
        <div className='divCenterBtnDown'>
          <img className='btnRandom' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-random-interface-kiranshastry-lineal-kiranshastry.png"/>
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
