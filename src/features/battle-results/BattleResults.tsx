import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransformers } from '../transformer/transformerSlice';
import { calculateWinner } from './definitions';

const BattleResults = () => {
  const transformers = useSelector(selectTransformers);
  const {
    foughtBattles,
    survivors,
    winners,
    winnerTeam,
    loserTeam,
    theWorldWasDestroyed,
  } = calculateWinner(transformers);
  return theWorldWasDestroyed ? (
    <p>Everyone was destroyed.</p>
  ) : (
    <div>
      <p>{foughtBattles} battle(s)</p>
      <p>
        Winning team ({winnerTeam}):{' '}
        {winners.map((winner, index) => (
          <span key={index}>{winner.name} ,</span>
        ))}
      </p>
      <p>
        Survivors from the losing team ({loserTeam}):{' '}
        {survivors.map((survivor, index) => (
          <span key={index}>{survivor.name} ,</span>
        ))}
      </p>
    </div>
  );
};

export default BattleResults;
