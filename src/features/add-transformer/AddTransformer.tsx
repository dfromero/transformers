import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTransformer } from '../transformer/transformerSlice';
import { TransformerType } from '../transformer/definitions';

interface FormValues {
  name: string;
  type: string;
  strength: string;
  intelligence: string;
  speed: string;
  endurance: string;
  rank: string;
  courage: string;
  firepower: string;
  skill: string;
}

const TransformerForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormValues> = ({
    name,
    type,
    ...attributes
  }) => {
    const transformer = {
      name,
      type,
      attributes,
    };

    dispatch(addTransformer(transformer));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="title">
          Add a bot{' '}
          <button className="button is-success is-small" type="submit">
            Add
          </button>
        </h3>
        <div className="columns">
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      placeholder="name"
                      name="name"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Type</label>
              </div>

              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <div className="select is-primary">
                      <select name="type" ref={register}>
                        <option value={TransformerType.Autobot}>Autobot</option>
                        <option value={TransformerType.Decepticon}>
                          Decepticon
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Strength</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Strength"
                      name="strength"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Intelligence</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Intelligence"
                      name="intelligence"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Speed</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Speed"
                      name="speed"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Endurance</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Endurance"
                      name="endurance"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Rank</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Rank"
                      name="rank"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Courage</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Courage"
                      name="courage"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Courage</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Courage"
                      name="courage"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Firepower</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Firepower"
                      name="firepower"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Skill</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      max={10}
                      min={0}
                      step={1}
                      placeholder="Skill"
                      name="skill"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const AddTransformer = () => {
  return <TransformerForm />;
};

export default AddTransformer;
