import 'dotenv/config';
import { DataSource } from 'typeorm';
import { connectionFactory } from './connectionFactory';

const factory = connectionFactory.connectionParams(process.env.NODE_ENV);

export const AppDataSource = new DataSource(factory);