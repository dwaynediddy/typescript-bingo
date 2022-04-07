import { useState } from 'react'
import '../bingo.css'

import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"

import Rules from '../components/Rules'

const Bingo = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
      });

    const [active, setActive] = useState({
        squares: [
            {id: 1, title: "one", img: 'avatar', toggled: false},
            {id: 2, title: "two", img: "claws", toggled: false},
            {id: 3, title: "three", img: "avatar", toggled: false},
            {id: 4, title: "four", img: "claws", toggled: false},
            {id: 5, title: "five", img: 'avatar', toggled: false},
            {id: 6, title: "six", img: "claws", toggled: false},
            {id: 7, title: "seven", img: "avatar", toggled: false},
            {id: 8, title: "eight", img: "claws", toggled: false},
            {id: 9, title: "nine", img: 'avatar', toggled: false},
            {id: 10, title: "ten", img: "claws", toggled: false},
            {id: 11, title: "eleven", img: "avatar", toggled: false},
            {id: 12, title: "twelve", img: "claws", toggled: false},
        ]
    })

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
    </div>
  )
}

export default Bingo
