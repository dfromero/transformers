import React, { FunctionComponent } from 'react';
import { ATTRIBUTES, Transformer, TransformerType } from './definitions';
import autobot from '../../autobot.png';
import decepticon from '../../decepticon.png';
interface Props {
  transformer: Transformer;
}

const TransformerDetails: FunctionComponent<Props> = ({ transformer }) => {
  return (
    <tr>
      <td>{transformer.name}</td>
      <td>
        {transformer.type}{' '}
        <img
          src={
            transformer.type === TransformerType.Autobot ? autobot : decepticon
          }
        />
      </td>
      {ATTRIBUTES.map((ATTRIBUTE) => (
        <td key={ATTRIBUTE}>{(transformer.attributes as any)[ATTRIBUTE]}</td>
      ))}
    </tr>
  );
};

export default TransformerDetails;
