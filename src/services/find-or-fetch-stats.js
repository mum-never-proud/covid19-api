import fetchStats from './fetch-stats';
import isOutdated from '../utils/is-outdated';
import parseStats from './parse-stats';
import { read, write, update } from './covid-db';

export default function (country) {
  const cachedData = read(country);

  if (cachedData && !isOutdated(cachedData.updated_at)) {
    return Promise.resolve(cachedData);
  }

  return fetchStats()
    .then((response) => response.text())
    .then((stats) => parseStats(stats, country))
    .then((stats) => Promise.resolve(cachedData ? update(country, stats) : write(stats)));
}
