import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { DbConfig } from './database.config';
import { UrlMapEntity } from '../entities/url-map.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DbConfig.host,
  port: DbConfig.port,
  username: DbConfig.username,
  password: DbConfig.password,
  database: DbConfig.database,
  ssl: true,
  entities: [UrlMapEntity],
  synchronize: DbConfig.synchronize,
});
