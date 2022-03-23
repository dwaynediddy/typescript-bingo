const bingoSquares = [
    {
        rowOne: [
            {title: "this is working", img: 'avatar'},
            {title: "two", img: "claws"},
            {title: "three", img: "claws"},
            {title: "four", img: "avatar"}
        ]
    },
    // {
    //     rowTwo: [
    //         {title: "five"},
    //         {title: "six"},
    //         {title: "seven"},
    //         {title: "eight"}
    //     ]
    // },
    // {
    //     rowThree: [
    //         {title: "nine"},
    //         {title: "ten"},
    //         {title: "11"},
    //         {title: "12"}
    //     ]
    // },
]

const Bingo = () => {
    const handleClick = () => {

    }

  return (
    <div className='bingoContainer'>
        <h3>Bingo</h3>
        <div className='rowOne'>
        {bingoSquares[0].rowOne.map((square, index) => (
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