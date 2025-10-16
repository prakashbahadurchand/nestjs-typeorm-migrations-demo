import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'toor',
    database: 'nestjs_typeorm_migrations_demo_db',
    entities: [
        __dirname + '/../core/shared/**/*.entity.js',
        __dirname + '/../features/**/*.entity.js',
    ],
    migrations: [__dirname + '/../core/database/migrations/*.js'],
    synchronize: false, // never use TRUE in production!
});