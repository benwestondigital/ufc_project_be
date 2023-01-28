import express, { Express, NextFunction, Request, Response } from 'express';
import { ExtendedError } from '../types/Express';
import helmet from 'helmet';
import cors from 'cors';
import * as data from './data.json';

export const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the UFC Event API!</h1>');
  // res.send(data.FightCard[0].Fighters[0]);
});

app.get('/events', (req: Request, res: Response) => {
  res.send('events');
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).send({ msg: 'Invalid URL' });
});

app.use((err: ExtendedError, req: Request, res: Response, next: NextFunction) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});

app.use((err: ExtendedError, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ msg: 'internal server error' });
});
