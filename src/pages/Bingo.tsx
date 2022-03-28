import React, { useState } from 'react'
import '../bingo.css'

const Bingo = () => {
    const [active, setActive] = useState({
        objects: [
            {id: 1, title: "one", img: 'avatar', toggled: false},
            {id: 2, title: "two", img: "claws", toggled: false},
            {id: 3, title: "three", img: "avatar", toggled: false},
            {id: 4, title: "four", img: "claws", toggled: false},
        ]
    })

    const toggleActive = (i: any) => {
        let arrayCopy = [...active.objects]

        arrayCopy[i].toggled
            ? (arrayCopy[i].toggled = false)
            : (arrayCopy[i].toggled = true)

            setActive({...active, objects: arrayCopy})
    }

    const toggleActiveStyles = (i: any) => {
        if(active.objects[i].toggled) {
            return 'btn active'
        } else {
            return 'btn inactive'
        }
    }

  return (
    <div className='bingoContainer'>
        {active.objects.map((square, i) => (
            <div key={i} className={toggleActiveStyles(i)} onClick={() => {toggleActive(i)}}>
                <img
                    src={require(`../images/${square.img}.png`)}
                    alt={square.title}               
                />
            </div>
        ))}
    </div>
  )
}

export default Bingo
