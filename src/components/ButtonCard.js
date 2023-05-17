import React, {useState} from 'react'
import styled from 'styled-components'




function ButtonCard () {
    const [buttonCard, setButtonCard] = useState(false)

    return (
        <div> 
            {
            buttonCard?<p>{}</p>:null
            }
            <button>Open/Close</button>
        </div>
    )
}

export default ButtonCard