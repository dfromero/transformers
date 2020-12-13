import { TransformerType } from './definitions';

const teams = [
  {
    name: 'Bluestreak',
    attributes: {
      strength: 6,
      intelligence: 6,
      speed: 7,
      endurance: 9,
      rank: 5,
      courage: 2,
      firepower: 9,
      skill: 7,
    },
    type: TransformerType.Autobot,
  },
  {
    name: 'Hubcap',
    attributes: {
      strength: 4,
      intelligence: 4,
      speed: 4,
      endurance: 4,
      rank: 4,
      courage: 4,
      firepower: 4,
      skill: 4,
    },
    type: TransformerType.Autobot,
  },
  {
    name: 'Soundwave',
    attributes: {
      strength: 8,
      intelligence: 9,
      speed: 2,
      endurance: 6,
      rank: 7,
      courage: 5,
      firepower: 6,
      skill: 10,
    },
    type: TransformerType.Decepticon,
  },
];

export default teams;
