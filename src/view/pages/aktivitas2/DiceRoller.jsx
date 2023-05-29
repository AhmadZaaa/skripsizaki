import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../assets/style/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
library.add(fas);

const DiceRoller = () => {
  const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);

    setTimeout(() => {
      const newDie1 = sides[Math.floor(Math.random() * sides.length)];
      const newDie2 = sides[Math.floor(Math.random() * sides.length)];
      setDie1(newDie1);
      setDie2(newDie2);
      setRolling(false);
    }, 1000);
  };

  const handleBtn = rolling ? 'RollDice-rolling' : '';

  return (
    <Card
      style={{ width: '450px' }}
      className="d-flex justify-content mx-auto shadow"
    >
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} rolling={rolling} />
          <Die2 face={die2} rolling={rolling} />
        </div>
        <button className={handleBtn} disabled={rolling} onClick={roll}>
          {rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
      </div>
    </Card>
  );
};

const Die = ({ face, rolling }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={['fas', `fa-dice-${face}`]}
        className={`Die ${rolling && 'Die-shaking'}`}
      />
    </div>
  );
};
const Die2 = ({ face, rolling }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={['fas', `fa-dice-${face}`]}
        className={`Die2 ${rolling && 'Die-shaking'}`}
      />
    </div>
  );
};

export default DiceRoller;
