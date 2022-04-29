import React, { useState } from 'react';

export default function TextNb(props){
    
    
    return(
        <div>
            <input type="number" placeholder='exemple : 120' onChange={(e) => {props.setNumber(e.target.value)}} />
        </div>
    )
}