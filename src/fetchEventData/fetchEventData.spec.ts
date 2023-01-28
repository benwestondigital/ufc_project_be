import { fetchEventData } from './fetchEventData';
import data from '../../data/ufc281.json';

describe('fetchEventData', () => {
  (global.fetch as any) = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          LiveEventDetail: data,
        }),
      ok: true,
    })
  );

  beforeEach(() => {
    (fetch as any).mockClear();
  });

  it('returns event data for a given event number', async () => {
    const eventData = await fetchEventData(1);
    expect(eventData).toEqual(data);
  });

  it('throws error when exception', async () => {
    (fetch as any).mockImplementationOnce(() => Promise.reject('API is down'));

    try {
      await fetchEventData(1);
    } catch (error) {
      expect(error).toEqual('API is down');
    }
    expect(fetch).toHaveBeenCalledWith(
      'https://d29dxerjsp82wz.cloudfront.net/api/v3/event/live/1.json'
    );
  });
});
