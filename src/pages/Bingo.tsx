import { useState, useRef } from 'react'
// @ts-ignore 
import { useDispatch } from 'react-redux'
import '../bingo.css'

import { BingoSquares } from '../components/data/data'

import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"
import Confetti from 'react-confetti'

import Rules from '../components/Rules'

const Bingo = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
      })

    //   const dispatch = useDispatch()

    const [active, setActive] = useState({
        squares: BingoSquares.getSquares()
    })

    const [show, setShow] = useState(false)
    const confettiRef = useRef(null)

    const toggleActive = (i: any) => {
        let arrayCopy = [...active.squares]

        arrayCopy[i].toggled
            ? (arrayCopy[i].toggled = false)
            : (arrayCopy[i].toggled = true)

            setActive({...active, squares: arrayCopy})
    }

    const toggleActiveStyles = (i: any) => {
        if(active.squares[i].toggled) {
            return 'btn active'
        } else {
            return 'btn inactive'
        }
    }

    const handleShow = (toggle: boolean) => {
        setShow(toggle)
      }

  return (
      <div className='bingoContainer'>
        <div className='headerContainer'>
        <h1>Bingo</h1>
        <button className='ruleBtn'onClick={() => setState({ isPaneOpen: true })}>
             Rules
        </button>
        <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={state.isPaneOpen}
            title='Rules'
            onRequestClose={() => {
                setState({ isPaneOpen: false })
            }} children={<Rules />} 
        />
        </div>
        <div className='bingoTiles'>   
            {active.squares.map((square, i) => (
                <div key={i} className={toggleActiveStyles(i)} onClick={() => {toggleActive(i)}}>
                    <img
                        src={require(`../images/${square.img}.png`)}
                        alt={square.title}               
                        />
                </div>
            ))}
        </div>
        <div className="bingoButtonContainer">
            <div
            onMouseLeave={() => handleShow(false)}
            ref={confettiRef}>
            <button
                onClick={() => handleShow(true)}
            >B-I-N-G-O</button>
            <Confetti
                recycle={show}
                // run={false}
                numberOfPieces={90}
            />
        </div>
        </div>
    </div>
  )
}

export default Bingo
