export const data = {
    EventId: 1114,
    Name: 'UFC 281: Adesanya vs. Pereira',
    StartTime: '2022-11-12T23:00Z',
    TimeZone: 'GMT-05:00',
    Status: 'Final',
    LiveEventId: null,
    LiveFightId: null,
    LiveRoundNumber: null,
    LiveRoundElapsedTime: null,
    Organization: { OrganizationId: 1, Name: 'Ultimate Fighting Championship' },
    Location: {
      City: 'New York City',
      State: 'New York',
      Country: 'USA',
      TriCode: 'USA',
      VenueId: 276,
      Venue: 'Madison Square Garden',
    },
    FightCard: [
      {
        FightId: 10047,
        FightOrder: 1,
        Status: 'Final',
        CardSegment: 'Main',
        CardSegmentStartTime: '2022-11-13T03:00Z',
        CardSegmentBroadcaster: 'PPV',
        Fighters: [
          {
            FighterId: 3051,
            MMAId: 155150,
            Name: {
              FirstName: 'Israel',
              LastName: 'Adesanya',
              NickName: 'The Last Stylebender',
            },
            Born: { City: 'Lagos', State: 'Lagos', Country: 'Nigeria', TriCode: 'NGR' },
            FightingOutOf: {
              City: 'Auckland',
              State: null,
              Country: 'New Zealand',
              TriCode: 'NZL',
            },
            Record: { Wins: 23, Losses: 2, Draws: 0, NoContests: 0 },
            DOB: '1989-07-22',
            Age: 33,
            Stance: 'Switch',
            Weight: 185,
            Height: 76,
            Reach: 80,
            UFCLink: 'http://www.ufc.com/athlete/Israel-Adesanya',
            WeightClasses: [
              {
                WeightClassId: 3,
                WeightClassOrder: 1,
                Description: 'Middleweight',
                Abbreviation: 'MW',
              },
            ],
            Corner: 'Red',
            WeighIn: 185,
            Outcome: { OutcomeId: 2, Outcome: 'Loss' },
            KOOfTheNight: false,
            SubmissionOfTheNight: false,
            PerformanceOfTheNight: false,
          },
          {
            FighterId: 3546,
            MMAId: 164059,
            Name: { FirstName: 'Alex', LastName: 'Pereira', NickName: 'Poatan' },
            Born: {
              City: 'Sao Bernardo do Campo',
              State: 'Sao Paulo',
              Country: 'Brazil',
              TriCode: 'BRA',
            },
            FightingOutOf: {
              City: 'Sao Paulo',
              State: 'Sao Paulo',
              Country: 'Brazil',
              TriCode: 'BRA',
            },
            Record: { Wins: 7, Losses: 1, Draws: 0, NoContests: 0 },
            DOB: '1987-07-07',
            Age: 35,
            Stance: 'Orthodox',
            Weight: 185,
            Height: 76,
            Reach: 79,
            UFCLink: 'http://www.ufc.com/athlete/Alex-Pereira',
            WeightClasses: [
              {
                WeightClassId: 3,
                WeightClassOrder: 1,
                Description: 'Middleweight',
                Abbreviation: 'MW',
              },
            ],
            Corner: 'Blue',
            WeighIn: 184.5,
            Outcome: { OutcomeId: 1, Outcome: 'Win' },
            KOOfTheNight: false,
            SubmissionOfTheNight: false,
            PerformanceOfTheNight: true,
          },
        ],
        Result: {
          Method: 'KO/TKO',
          EndingRound: 5,
          EndingTime: '2:01',
          EndingStrike: 'Punches',
          EndingTarget: 'Head',
          EndingPosition: 'At Distance',
          EndingSubmission: null,
          EndingNotes: null,
          FightOfTheNight: false,
          FightScores: [],
        },
        WeightClass: {
          WeightClassId: 3,
          CatchWeight: null,
          Weight: '171-185',
          Description: 'Middleweight',
          Abbreviation: 'MW',
        },
        Accolades: [{ Type: 'Belt', Name: 'UFC Middleweight Title' }],
        Referee: { RefereeId: 31, FirstName: 'Marc', LastName: 'Goddard' },
        RuleSet: { PossibleRounds: 5, Description: '5 Rnd (5-5-5-5-5)' },
      },
    ],
  };