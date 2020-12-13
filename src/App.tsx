import React from 'react';
import './App.scss';
import BattleResults from './features/battle-results/BattleResults';
import AddTransformer from './features/add-transformer/AddTransformer';
import Transformers from './features/transformers/Transformers';
import ResetTransformers from './features/reset-transformers/ResetTransformers';

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Transformers battle <ResetTransformers />
        </h1>
        <div className="columns">
          <div className="column">
            <Transformers />
          </div>
          <div className="column">
            <BattleResults />
          </div>
        </div>
        <div className="row">
          <div className="column column-50">
            <AddTransformer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
