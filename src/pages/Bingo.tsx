import '../bingo.css'

const lineOne = [
    {
        rowOne: [
            {title: "this is working", img: 'avatar'},
            {title: "two", img: "claws"},
            {title: "three", img: "avatar"},
            {title: "four", img: "claws"},
        ]
    },
]
const lineTwo = [
    {
        rowOne: [
            {title: "this is working", img: 'claws'},
            {title: "two", img: "avatar"},
            {title: "three", img: "claws"},
            {title: "four", img: "avatar"},
        ]
    },
]
const lineThree = [
    {
        rowOne: [
            {title: "this is working", img: 'avatar'},
            {title: "two", img: "claws"},
            {title: "three", img: "claws"},
            {title: "four", img: "avatar"},
        ]
    },
]

const Bingo = () => {
    const handleClick = () => {

    }

  return (
    <div className='bingoContainer'>
        <h3>Bingo</h3>
        <div className='rowOne'>
        {lineOne[0].rowOne.map((square, index) => (
            <div key={index} className="bingoSquares">
                <img 
                     src={require(`../images/${square.img}.png`)}
                     alt={square.title}
                />
            </div>
        ))}
        </div>
        <div className='rowTwo'>
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
        </div>
    </div>
  )
}

export default Bingo