import { Router } from 'express';
import chalk from 'chalk';
import fetchOrFetchStats from '../services/find-or-fetch-stats';
import validateCountriesRequest from '../middlewares/validate-countries-request';

const router = new Router();

router.get('/:country', validateCountriesRequest, (req, res) => {
  fetchOrFetchStats(req.params.country)
    .then((stats) => res.json(stats).status(200))
    .catch((err) => {
      console.log(chalk`{red.bold failed to fetch >> stats ${err}}`);
      res.boom.badImplementation();
    });
});

export default router;
