import express from 'express';
import { errors } from 'celebrate';

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(process.env.APP_PORT, () => console.log(`Listening on port ${process.env.APP_PORT}!`));
