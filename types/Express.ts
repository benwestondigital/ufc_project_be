import { ErrorRequestHandler } from 'express';


export interface ExtendedError extends ErrorRequestHandler {
status: number;
msg: string;
}