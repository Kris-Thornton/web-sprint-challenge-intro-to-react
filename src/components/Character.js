// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const CharacterTitle = styled.h2`
display: flex;
padding-left: 2em;
color: darkred;
`



function Character(props) {
  return (
    
    <div>
        <CharacterTitle>{props.item.name}</CharacterTitle>
        <div>
          
           <h3>HomeWorld: {props.item.homeworld}</h3>
            <ul>
                Birth Year: {props.item.birth_year},<br></br> 
                Mass: {props.item.mass}<br></br>
                Height: {props.item.height}<br></br>
                StarShips:{props.item.starships} 
                
            </ul> 
        </div>
        
    </div>
  )
}

export default Character
