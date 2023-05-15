// Write your Character component here
import React from 'react'

function Character(props) {
  return (
    <div>
        <h2>{props.item.name}</h2>
        <div>
           <img src ={{url: props.item.homeworld}} />
            <ul>
                Birth Year: {props.item.birth_year},<br></br> 
                Mass: {props.item.mass}<br></br>
                Height: {props.item.height}<br></br>
                StartShips:<img src ={{url: props.item.starships}} />
                
            </ul> 
        </div>
        
    </div>
  )
}

export default Character
