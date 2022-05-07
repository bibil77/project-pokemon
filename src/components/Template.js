import firePokemonCard from '../assets/img/energyBall/water.jpg'
import naturePokemonCard from '../assets/img/naturePokemonCard.jpg'

// importation css
import './cssComponents/TemplateCss.css'
export default function Template(props){

    return(
        <img src={props.src} height={150} width={105}
        style={{margin: 5}}
        onClick={()=>{props.setBackground(props.template)}}
        />
    )
}