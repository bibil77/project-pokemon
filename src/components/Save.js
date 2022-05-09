/* Importing the useReducer hook from the react library. */
import { useReducer } from 'react';

// export default function Save(props){
//     const addSave = [...props.save,

//         [   //card information
//             { id: "name", value: props.name },
//             { id: "pv", value: props.pv },
//             { id: "energyBall", value: props.energyBall },
//             { id: "background", value: props.background },
//             // attack 1
//             { id: "atk1EnergyBall", value: props.atk1EnergyBall },
//             { id: "attackName1", value: props.attackName1 },
//             { id: "attackDesc1", value: props.attackDesc1 },
//             { id: "damage1", value: props.damage1 },
//             // attack 2
//             { id: "atk2EnergyBall", value: props.atk2EnergyBall },
//             { id: "attackName2", value: props.attackName2 },
//             { id: "attackDesc2", value: props.attackDesc2 },
//             { id: "damage2", value: props.damage2 },
//             // card footer
//             { id: "weakness", value: props.weakness },
//             { id: "weaknessNb", value: props.weaknessNb },
//             { id: "resistance", value: props.resistance },
//             { id: "resistanceNb", value: props.resistanceNb },
//             { id: "retreat", value: props.retreat },
//             { id: "retreatNb", value: props.retreatNb },
//         ]
//     ]
//     const reducer = (state, action) => {
//       switch(action){
//           case 'SAVE': state + 1
//           default:
//               throw new Error()
//       }
//     }
    
//     const [save, dispatch] = useReducer(reducer, [])
    

//     return(
//         <>
//         <button className={props.className} onClick={ ()=> { props.dispatch('SAVE'); 
//             // alert(props.save.map(item => console.log(item.id, " ", item.value)))
//             console.log(props.save);
//         }}>save</button>
//         <button onClick={()=>{localStorage.setItem('save1', JSON.stringify(props.save))}}>saveCard</button>
//         <button onClick={()=>{localStorage.clear()}}>clear</button>
//         </>
//     )
//     // alert(props.save)
// }

const reducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        throw new Error()
    }
}
  
const Save = (props) => {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
      <div className={props.className}>
        Counter: {count}
        <button onClick={() => dispatch('INCREMENT')}>+</button>
        <button onClick={() => dispatch('DECREMENT')}>-</button>
      </div>
    )
}

export default Save