import Express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

const app = new Express();
const { APP_NAME, APP_PORT } = process.env;

// eslint-disable-next-line no-console
app.listen(APP_PORT, () => console.log(chalk`{blue.bold ${APP_NAME} started on ${APP_PORT} @ ${Date.now()}}`));
