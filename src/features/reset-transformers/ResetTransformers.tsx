import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../transformer/transformerSlice';

const ResetTransformers = () => {
  const dispatch = useDispatch();

  return (
    <button className="button is-danger" onClick={() => dispatch(reset())}>
      Start over!
    </button>
  );
};

export default ResetTransformers;
