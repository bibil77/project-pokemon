import React, { Component } from 'react'
import Select from 'react-select'

// importation du style.css
// import './cssComponents/SelectEnergy.css'

//importation des EnergyBalls
import fireEnergyBall from '../assets/img/energyBall/Fire Pokemon.jpg'
import waterEnergyBall from '../assets/img/energyBall/water.jpg'

export default function SelectEnergyMulti(props){
    const options = [
        { value: fireEnergyBall, label: 'fire Energy Ball' },
        { value: waterEnergyBall, label: 'water Energy Ball' },
    ]

    // style
    // const customStyles = {
    //     option: (provided, state) => ({
    //       ...provided,
    //       borderBottom: '1px dotted pink',
    //       color: state.isSelected ? 'red' : 'blue',
    //     //   padding: 20,
    //     }),
    //     // control: () => ({
    //     //   // none of react-select's styles are passed to <Control />
    //     //   width: 200,
    //     // }),
    //     singleValue: (provided, state) => {
    //       const opacity = state.isDisabled ? 0.5 : 1;
    //       const transition = 'opacity 300ms';
      
    //       return { ...provided, opacity, transition };
    //     }
    //   }

    return(
        <Select options={options}
        onChange={(e) => {props.setEnergyBallMulti(e.value)}}
        isMulti
        />
    )
}