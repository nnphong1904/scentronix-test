import axios from 'axios';
import { findServer } from './findServer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('findServer', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the server with the lowest priority that is online', async () => {
    mockedAxios.get.mockImplementation((url) => {
      switch (url) {
        case 'https://does-not-work.perfume.new':
          return Promise.reject(new Error('Network Error'));
        case 'https://gitlab.com':
          return Promise.resolve({ status: 200 });
        case 'http://app.scnt.me':
          return Promise.resolve({ status: 200 });
        case 'https://offline.scentronix.com':
          return Promise.resolve({ status: 200 });
        default:
          return Promise.reject(new Error('Unknown URL'));
      }
    });

    const server = await findServer();
    expect(server).toEqual({ url: 'https://offline.scentronix.com', priority: 2, reachable: true });
  });

  it('should throw an error if no servers are online', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(findServer()).rejects.toThrow('No servers are online');
  });
});
