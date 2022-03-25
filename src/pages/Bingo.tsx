import { useState } from 'react'
import '../bingo.css'
import {lineOne, lineTwo, lineThree} from '../data/data'

const Bingo = () => {
    const [clicked, setClicked] = useState()

    const squareComplete = () => {

    }

  return (
    <div className='bingoContainer'>
        <h3>Bingo</h3>
        <div className='rowOne'>
        {lineOne.map((square, index) => (
            <tr key={index}>
                <button className='bingoBtn' onClick={squareComplete}>
                    <img 
                        src={require(`../images/${square.img}.png`)}
                        alt={square.title}
                    />
                </button>
            </tr>
        ))}
        </div>
    </div>
  )
}

export default Bingo