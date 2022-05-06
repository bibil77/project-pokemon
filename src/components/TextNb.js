// composant d'entrée de nombre seulement 
export default function TextNb(props){
    return(
        <div>
            <input type="number" className={props.className} defaultValue={props.value} placeholder={props.placeholder} max={props.max} onChange={(e) => {props.setNumber(e.target.value)}} />
        </div>
    )
}