import { useState, useEffect } from 'react'

import '../bingo.css'

const lineOne = [
    {id: 1, title: "this is working", img: 'avatar'},
    {id: 2, title: "two", img: "claws"},
    {id: 3, title: "three", img: "avatar"},
    {id: 4, title: "four", img: "claws"},
]

const lineTwo = [
    {id: 5, title: "five", img: 'avatar'},
    {id: 6, title: "six", img: "claws"},
    {id: 7, title: "seven", img: "claws"},
    {id: 8, title: "eight", img: "avatar"},
]
const lineThree = [
    {id: 9, title: "nine", img: 'claws'},
    {id: 10, title: "ten", img: "avatar"},
    {id: 11, title: "eleven", img: "claws"},
    {id: 12, title: "twelve", img: "avatar"},
]


const Bingo = () => {
    const [clicked, setClicked] = useState('unselected')

    const squareComplete = () => {
        setClicked('selected')
    }

  return (
    <div className='bingoContainer'>
        <h3>Bingo</h3>
        <div className='rowOne'>
        {lineOne.map((square, index) => (
            <div key={index}>
                <button className={clicked} onClick={squareComplete}>
                    <img 
                        src={require(`../images/${square.img}.png`)}
                        alt={square.title}
                        className='bingoSquareImg'
                        />
                </button>
            </div>
        ))}
        </div>
        {/* <div className='rowTwo'>
        {lineTwo[0].rowOne.map((square, index) => (
            <div key={index} className="bingoSquares">
                <button className="squareButton" onClick={squareComplete}>
                    <img 
                        src={require(`../images/${square.img}.png`)}
                        alt={square.title}
                        className='bingoSquareImg'
                        />
                </button>
            </div>
        ))}
        </div>
        <div className='rowThree'>
        {lineThree[0].rowOne.map((square, index) => (
            <div key={index} className="bingoSquares">
                <button className="squareButton" onClick={squareComplete}>
                    <img 
                        src={require(`../images/${square.img}.png`)}
                        alt={square.title}
                        className='bingoSquareImg'
                        />
                </button>
            </div>
        ))}
        </div> */}
    </div>
  )
}

export default Bingo