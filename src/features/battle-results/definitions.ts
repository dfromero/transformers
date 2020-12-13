import { Transformer, TransformerType } from '../transformer/definitions';

const THE_BIG_BOSSES = ['optimus prime', 'predaking'];

const checkCourage = (bot1: Transformer, bot2: Transformer) => {
  return (
    bot1.attributes.courage - bot2.attributes.courage >= 4 ||
    bot2.attributes.courage - bot1.attributes.courage >= 4
  );
};
const checkStrength = (bot1: Transformer, bot2: Transformer) => {
  return (
    bot1.attributes.strength - bot2.attributes.strength >= 3 ||
    bot2.attributes.strength - bot1.attributes.strength >= 3
  );
};
const checkSkill = (bot1: Transformer, bot2: Transformer) => {
  return (
    bot1.attributes.skill - bot2.attributes.skill >= 3 ||
    bot2.attributes.skill - bot1.attributes.skill >= 3
  );
};
const getOverallPower = (bot: Transformer) => {
  return (
    bot.attributes.strength +
    bot.attributes.intelligence +
    bot.attributes.speed +
    bot.attributes.endurance +
    bot.attributes.firepower
  );
};
const getWinnerByOverallRating = (bot1: Transformer, bot2: Transformer) => {
  const bot1Rating = getOverallPower(bot1);
  const bot2Rating = getOverallPower(bot2);
  if (bot1Rating > bot2Rating) return bot1;
  if (bot2Rating > bot1Rating) return bot2;
  return null;
};

const isBigBoss = ({ name }: Transformer) =>
  THE_BIG_BOSSES.includes(name.toLowerCase());

const checkBigBosses = (bot1: Transformer, bot2: Transformer) =>
  isBigBoss(bot1) || isBigBoss(bot2);

const bossFight = (bot1: Transformer, bot2: Transformer) => {
  if (isBigBoss(bot1) && !isBigBoss(bot2)) return bot1;
  if (!isBigBoss(bot1) && isBigBoss(bot2)) return bot2;
  if (isBigBoss(bot1) && isBigBoss(bot2)) return null;
};
export const calculateWinner = (transformers: Transformer[]) => {
  const autobots = transformers.filter(
    (bot) => bot.type === TransformerType.Autobot
  );
  const decepticons = transformers.filter(
    (bot) => bot.type === TransformerType.Decepticon
  );
  const numberOfBattles = Math.min(autobots.length, decepticons.length);
  let foughtBattles = 0;
  const winners: Transformer[] = [];
  let theWorldWasDestroyed = false;

  while (foughtBattles < numberOfBattles) {
    foughtBattles += 1;
    const autobot = autobots.shift() as Transformer;
    const decepticon = decepticons.shift() as Transformer;

    if (checkBigBosses(autobot, decepticon)) {
      const winner = bossFight(autobot, decepticon);
      if (winner) {
        winners.push(winner);
      } else {
        // no winner on big boss fight, means they faced each other or replica
        theWorldWasDestroyed = true;
      }
    } else {
      // if no big bosses, proceed regular rules
      if (checkStrength(autobot, decepticon)) {
        winners.push(
          autobot.attributes.strength > decepticon.attributes.strength
            ? autobot
            : decepticon
        );
      } else if (checkCourage(autobot, decepticon)) {
        winners.push(
          autobot.attributes.courage > decepticon.attributes.courage
            ? autobot
            : decepticon
        );
      } else if (checkSkill(autobot, decepticon)) {
        winners.push(
          autobot.attributes.skill > decepticon.attributes.skill
            ? autobot
            : decepticon
        );
      } else {
        const winner = getWinnerByOverallRating(autobot, decepticon);
        if (winner) {
          // else is tied both are destroyed
          winners.push(winner);
        }
      }
    }
  }

  const winnersByType = winners.map((winner) => winner.type);
  const autobotsWonFights = winnersByType.filter(
    (winner) => winner === TransformerType.Autobot
  ).length;
  const decepticionsWonFights = winnersByType.filter(
    (winner) => winner === TransformerType.Decepticon
  ).length;
  const winnerTeam =
    autobotsWonFights > decepticionsWonFights
      ? TransformerType.Autobot
      : TransformerType.Decepticon;
  const loserTeam =
    winnerTeam === TransformerType.Autobot
      ? TransformerType.Decepticon
      : TransformerType.Autobot;

  return {
    foughtBattles,
    survivors:
      winnerTeam === TransformerType.Autobot ? [...decepticons] : [...autobots],
    winners: winners.filter((winner) => winner.type === winnerTeam),
    winnerTeam,
    loserTeam,
    theWorldWasDestroyed,
  };
};
