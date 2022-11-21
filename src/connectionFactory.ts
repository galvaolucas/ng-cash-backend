import { DataSourceOptions } from "typeorm";

class ConnectionFactory {
    connectionParams (env: string) {
        let factory: DataSourceOptions;

        if (env === 'development') {
            factory = {
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                    entities: 
                        [`src/modules/**/infra/typeorm/entities/*.ts`]
                    ,
                    migrations: 
                        [`src/shared/typeorm/migrations/*.ts`]
                    ,
                }
        } else {
            factory = {
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                ssl: {
                    rejectUnauthorized: false,
                },
                entities: 
                    [`./dist/modules/**/infra/typeorm/entities/*.js`]
                ,
                migrations:
                    [`./dist/shared/typeorm/migrations/*.js`]
                ,
            }
        }

        return factory;
    }
}

export const connectionFactory = new ConnectionFactory();