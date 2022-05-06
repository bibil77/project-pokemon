// composant d'entrée de texte seulement
export default function Text(props){
    return(
        <div>
            <input type="text" className={props.className} defaultValue={props.value} placeholder={props.placeholder} maxLength={props.maxLength} onChange={(e) => {props.setText(e.target.value)}} />
        </div>
    )
}