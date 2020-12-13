export enum TransformerType {
  Autobot = 'autobot',
  Decepticon = 'decepticon',
}

export const ATTRIBUTES = [
  'strength',
  'intelligence',
  'speed',
  'endurance',
  'rank',
  'courage',
  'firepower',
  'skill',
];

export interface Transformer {
  name: string;
  type: TransformerType;
  attributes: {
    strength: number;
    intelligence: number;
    speed: number;
    endurance: number;
    rank: number;
    courage: number;
    firepower: number;
    skill: number;
  };
}
