import './rule.css'

const exampleImg = require('../images/example.png')
const ruleTitles = 'Rules'

const rules = [
  {
    id: 1,
    rule: 'Buy in is ...million of the finest gilenorian coins',
  },
  {
    id: 2,
    rule: 'Start Date is ..',
  },
  {
    id: 3,
    rule: 'must have screen shot and codename which will be given at start of bingo',
  },
  {
    id: 4,
    rule: 'Square rules/contests will be voted on by participants, majority rules.',
  },
  {
    id: 5,
    rule: 'Pay out will be paid to the account Entered in Tokens or bonds if IronMan',
  },
  {
    id: 6,
    rule: 'The account must be bought in and can be the only account to used in the competition',
  },
  {
    id: 7,
    rule: 'Cheaters caught will be DQ from tournament. further warning or punishment will be decided case by case.',
  },
]

const Rules = () => {
  return (
    <div className="ruleContainer">
      <h2 className="ruleTitle">{ruleTitles}</h2>
      {rules.map((rule) => (
        <p className="ruleText">{rule.rule}</p>
      ))}
      <img
      className="exampleImg"
        src={exampleImg}
        alt='example'
      />
    </div>
  )
}

export default Rules