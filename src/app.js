import Express from 'express';
import boom from 'express-boom';
import chalk from 'chalk';
import dotenv from 'dotenv';
import morgan from 'morgan';
import stats from './routes/stats';

dotenv.config();

const app = new Express();
const { APP_NAME, APP_PORT } = process.env;

app.use(boom());
app.use(morgan('combined'));
app.use('/stats', stats);
app.use((_, res) => res.boom.notFound());
// eslint-disable-next-line no-console
app.listen(APP_PORT, () => console.log(chalk`{blue.bold ${APP_NAME} started on ${APP_PORT} @ ${Date.now()}}`));
