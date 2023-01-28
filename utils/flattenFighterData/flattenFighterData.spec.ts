import { flattenFighterData } from './flattenFighterData';
import { data } from './flattenFighterData.testdata';

describe('transformFighterData', () => {
  it('should return an empty array when called with an empty object', () => {
    const data = {} as any;
    const result = flattenFighterData(data);
    expect(result).toEqual([]);
  });
});

it('should return an array of flattened fighter data when called with valid data', () => {
  const actual = flattenFighterData(data);
  const expected = [
    [
      'Israel Adesanya',
      'The Last Stylebender',
      33,
      'Lagos',
      'Nigeria',
      185,
      76,
      23,
      2,
      0,
      'http://www.ufc.com/athlete/Israel-Adesanya',
      'Middleweight',
    ],
    [
      'Alex Pereira',
      'Poatan',
      35,
      'Sao Bernardo do Campo',
      'Brazil',
      185,
      76,
      7,
      1,
      0,
      'http://www.ufc.com/athlete/Alex-Pereira',
      'Middleweight',
    ],
  ];
  expect(expected).toEqual(actual);
});
