import { useState } from 'react'
import '../bingo.css'

const lineOne = [
    {id: 1, title: "one", img: 'avatar'},
    {id: 2,title: "two", img: "claws"},
    {id: 3,title: "three", img: "avatar"},
    {id: 4,title: "four", img: "claws"},
]

const lineTwo = [
    {id: 5, title: "this is working", img: 'claws'},
    {id: 6, title: "two", img: "avatar"},
    {id: 7, title: "three", img: "claws"},
    {id: 8, title: "four", img: "avatar"},
]

const lineThree = [
    {id: 9, title: "this is working", img: 'avatar'},
    {id: 10, title: "two", img: "claws"},
    {id: 11, title: "three", img: "claws"},
    {id: 12, title: "four", img: "avatar"},
]


const Bingo = () => {
    const [clicked, setClicked] = useState('unSelected')

    const squareComplete = () => {
        console.log('change style')

        setClicked("selected")
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
                        className={clicked}
                    />
                </button>
            </div>
        ))}
        </div>
        {/* <div className='rowTwo'>
        {lineTwo[0].rowOne.map((square, index) => (
            <div key={index} className="bingoSquares">
                <img 
                     src={require(`../images/${square.img}.png`)}
                     alt={square.title}
                />
            </div>
        ))}
        </div>
        <div className='rowThree'>
        {lineThree[0].rowOne.map((square, index) => (
            <div key={index} className="bingoSquares">
                <img 
                     src={require(`../images/${square.img}.png`)}
                     alt={square.title}
                />
            </div>
        ))}
        </div> */}
    </div>
  )
}

export default Bingo