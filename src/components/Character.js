// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const CharacterTitle = styled.h2`
display: flex;
padding-left: 2em;
color: darkred;

`
const WrapperTitle = styled.div`
border: 1px solid red;`


function Character(props) {


  return (
    
    <WrapperTitle>
      
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
        
    </WrapperTitle>
  )
}

export default Character
