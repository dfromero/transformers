import React, { FunctionComponent } from 'react';
import { ATTRIBUTES } from '../transformer/definitions';
import TransformerDetail from '../transformer/Transformer';
import { useSelector } from 'react-redux';
import { selectTransformers } from '../transformer/transformerSlice';

const Transformers: FunctionComponent = () => {
  const transformers = useSelector(selectTransformers);
  const attributesTable = (
    <table className="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Type</td>
          {ATTRIBUTES.map((ATTRIBUTE) => (
            <td key={ATTRIBUTE}>{ATTRIBUTE}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {transformers.map((bot, index) => (
          <TransformerDetail key={`transformer-${index}`} transformer={bot} />
        ))}
      </tbody>
    </table>
  );

  return <div>{attributesTable}</div>;
};

export default Transformers;
