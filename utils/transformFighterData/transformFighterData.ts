import { FlattenedFighterData, LiveEventData, FightCard } from './../../types/EventData';
import { writeToJsonFile } from '../utils';
import { Fighter } from '../../types/EventData';
import data from '../../src/data.json';

export const transformFighterData = ({
  FightCard,
}: LiveEventData): FlattenedFighterData[] | void => {
  if (!FightCard) return [];
  let fighters: Fighter[][] = [];

  FightCard.map(({ Fighters }) => Fighters).forEach((fighter) => {
    fighters.push([fighter[0]], [fighter[1]]);
  });

  const transformedFighterData = fighters.map((individualFighterArr) => {
    let fighterData = [] as any;

    individualFighterArr.forEach(
      ({ Name, Age, Born, Weight, Height, Record, UFCLink, WeightClasses }: Fighter) => {
        const name = `${Name.FirstName} ${Name.LastName}`;
        fighterData.push(
          name,
          Name.NickName,
          Age,
          Born.City,
          Born.Country,
          Weight,
          Height,
          Record.Wins,
          Record.Losses,
          Record.Draws,
          UFCLink,
          WeightClasses[0].Description
        );
      }
    );
    return fighterData;
  });
  return transformedFighterData;
};

const fighterData = transformFighterData(data);

writeToJsonFile(fighterData, 'fighters');
