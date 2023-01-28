export type LiveEventData = {
  EventId: number;
  Name: string;
  StartTime: string;
  TimeZone: string;
  Status: string;
  LiveEventId: null | number;
  LiveFightId: null | number;
  LiveRoundNumber: null | number;
  LiveRoundElapsedTime: null | string;
  Organization: Organization;
  Location: Location;
  FightCard: FightCard[];
};

export type Location = {
  City: string;
  State: string;
  Country: string;
  TriCode: string;
  VenueId: number;
  Venue: string;
};

export type Organization = { OrganizationId: number; Name: string };

export type FightCard = {
  FightId: number;
  FightOrder: number;
  Status: string;
  CardSegment: string;
  CardSegmentStartTime: string;
  CardSegmentBroadcaster: string;
  Fighters: Fighter[];
  Result?: Result;
  WeightClass: FightEventWeightClass;
  Accolades: Accolades[];
  Referee: Referee;
  Ruleset?: Ruleset;
  FightNightTracking?: FightNightTracking[];
};

export type Result = {
  Method: string;
  EndingRound: number;
  EndingTime: string;
  EndingStrike: string | null;
  EndingTarget: string | null;
  EndingPosition: string | null;
  EndingSubmission: string | null;
  EndingNotes: string | null;
  FightOfTheNight: boolean;
  FightScores: any[];
};

export type FighterWeightClass = {
  WeightClassId: number;
  WeightClassOrder: number;
  Description: string;
  Abbreviation: string;
};

export type FightEventWeightClass = {
  WeightClassId: number;
  CatchWeight: null | boolean | string;
  Weight: string;
  Description: string;
  Abbreviation: string;
};

export type WeightClassNames =
  | 'Flyweight'
  | 'Bantamweight'
  | 'Featherweight'
  | 'Lightweight'
  | 'Welterweight'
  | 'Middleweight'
  | 'Light Heavyweight'
  | 'Heavyweight'
  | "Women's Flyweight"
  | "Women's Strawweight"
  | "Women's Bantamweight";

export type Fighter = {
  FighterId: number;
  MMAId: number;
  Name: {
    FirstName: string;
    LastName: string;
    NickName: string | null;
  };
  Born: { City: string | null; State: string | null; Country: string; TriCode: string };
  FightingOutOf: {
    City: string | null;
    State: string | null;
    Country: string;
    TriCode: string;
  };
  Record: Record;
  DOB: string;
  Age: number;
  Stance: string;
  Weight: number;
  Height: number;
  Reach: number;
  UFCLink: string;
  WeightClasses: FighterWeightClass[];
  Corner: string;
  WeighIn: number;
  Outcome: Outcome;
  KOOfTheNight: boolean;
  SubmissionOfTheNight: boolean;
  PerformanceOfTheNight: boolean;
};

export type Record = { Wins: number; Losses: number; Draws: number; NoContests: number };

export type Outcome = { OutcomeId: number; Outcome: string };

export type Accolades = { Type: string; Name: string };

export type Referee = {
  RefereeId: number;
  FirstName: string;
  LastName: string;
};

export type Ruleset = { PossibleRounds: number; Description: string };

export type FightNightTracking = {
  ActionId: number;
  FighterId: null | number | string;
  Type: string;
  RoundNumber: null | number;
  RoundTime: null | string;
  Timestamp: string;
};

export type FlattenedFighterData = [
  string,
  string | null,
  number,
  string,
  string,
  number,
  number,
  number,
  number,
  number,
  string,
  string
];
