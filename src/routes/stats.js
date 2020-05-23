import { Router } from 'express';
import chalk from 'chalk';
import fetchStats from '../services/fetch-stats';
import parseStats from '../services/parse-stats';
import validateCountriesRequest from '../middlewares/validate-countries-request';

const router = new Router();

router.get('/:country', validateCountriesRequest, (req, res) => {
  // eslint-disable-next-line no-console
  fetchStats()
    .then((response) => response.text())
    .then((stats) => parseStats(stats, req.params.country))
    .then((statsObj) => res.json(statsObj))
    .catch((err) => {
      console.log(chalk`{red.bold failed to fetch >> stats ${err}}`);
      res.boom.badImplementation();
    });
});

export default router;
