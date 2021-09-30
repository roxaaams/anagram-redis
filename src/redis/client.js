import redis from 'redis';
import { promisify } from 'util';
import { sortString } from '../utils';

const config = {
  host: 'db',
  port: '6379',
};

const client = redis.createClient(config);

const rpush = promisify(client.rpush).bind(client);
const lrange = promisify(client.lrange).bind(client);

export const setKey = async (line) => {
  const key = sortString(line);
  await rpush(key, line);
};

export const getKey = (line) => {
  const key = sortString(line);
  return lrange(key, 0, -1);
};
