import axios from 'axios';

interface UrlEntry {
  url: string;
  priority: number;
}

const urls: UrlEntry[] = [
  { url: 'https://does-not-work.perfume.new', priority: 1 },
  { url: 'https://gitlab.com', priority: 4 },
  { url: 'http://app.scnt.me', priority: 3 },
  { url: 'https://offline.scentronix.com', priority: 2 },
];

const isReachable = async (url: string): Promise<boolean> => {
  try {
    const response = await axios.get(url, { timeout: 5000 });
    return response.status >= 200 && response.status < 300;
  } catch (error) {
    return false;
  }
};

export const findServer = async (): Promise<UrlEntry> => {
  const reachableUrls = await Promise.all(
    urls.map(async (entry) => ({
      ...entry,
      reachable: await isReachable(entry.url),
    }))
  );

  const onlineServers = reachableUrls.filter((entry) => entry.reachable);

  if (onlineServers.length === 0) {
    throw new Error('No servers are online');
  }

  const lowestPriorityServer = onlineServers.reduce((prev, curr) => (prev.priority < curr.priority ? prev : curr));

  return lowestPriorityServer;
};
