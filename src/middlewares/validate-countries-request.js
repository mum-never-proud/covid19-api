import chalk from 'chalk';
import countries from '../constants/countries';
import equalsIgnoreCase from '../utils/equals-ignore-case';

export default function (req, res, next) {
  const { params } = req;

  if (params.country) {
    if (countries.some((country) => equalsIgnoreCase(country, params.country))) {
      return next();
    }
  }

  console.log(chalk`{red.yellow country missing >>> ${params.country}}`);

  return res.boom.notFound();
}
