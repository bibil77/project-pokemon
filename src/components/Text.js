// composant d'entrée de texte seulement
export default function Text(props){
    return(
        <div>
            <input type="text" placeholder={props.placeholder} onChange={(e) => {props.setText(e.target.value)}} />
        </div>
    )
}