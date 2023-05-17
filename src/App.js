import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';



const App = () => {

  const [characterData, setCharacterData] = useState([]);
  const [buttonCard, setButtonCard] = useState(false)
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacterData(res.data)
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const Title = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  `;

  return (
    
    <div className="App">
      <div>
        <Title>Characters</Title>
      </div>
      
      <div >
        
        {characterData.map((item) => {
          return (
            <>
          <div> 
            {
            buttonCard?<p>{<Character item={item} />}</p>:null
            }
            <button onClick={() => setButtonCard(!buttonCard)}>Open/Close</button>
        </div>
            <div>
              
            </div>
            </>
          )
        })}
      </div>
     
    </div>
  );
}

export default App;
