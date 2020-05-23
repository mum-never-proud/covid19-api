import nodeFetch from 'node-fetch';

export default function () {
  const { WORLD_METER_ENDPOINT } = process.env;

  return nodeFetch(WORLD_METER_ENDPOINT);
}
