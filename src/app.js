import Express from 'express';
import serverless from 'serverless-http';
import boom from 'express-boom';
import dotenv from 'dotenv';
import morgan from 'morgan';
import stats from './routes/stats';

dotenv.config();

const app = new Express();

app.use(boom());
app.use(morgan('combined'));
app.use('/.netlify/functions/app/stats', stats);
app.use((_, res) => res.boom.notFound());

module.exports = app;
module.exports.handler = serverless(app);
