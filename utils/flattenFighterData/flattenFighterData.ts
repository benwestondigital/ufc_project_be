import { LiveEventData } from '../../types/EventData';

export const flattenFighterData = ({ FightCard }: LiveEventData): (string | number | null)[][] => {
  if (!FightCard) return [];

  return FightCard.flatMap(({ Fighters }) => {
    return Fighters.map(({ Name, Age, Born, Weight, Height, Record, UFCLink, WeightClasses }) => {
      const { FirstName, LastName, NickName } = Name;
      const fullName = `${FirstName} ${LastName}`;
      const { City, Country } = Born;
      const { Wins, Losses, Draws } = Record;

      return [
        fullName,
        NickName,
        Age,
        City,
        Country,
        Weight,
        Height,
        Wins,
        Losses,
        Draws,
        UFCLink,
        WeightClasses[0] ? WeightClasses[0].Description : null,
      ];
    });
  });
};
