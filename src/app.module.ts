import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'nestjs_typeorm_migrations_demo_db',
      entities: [__dirname + '/entities/*.entity{.ts,.js}'], // for runtime
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

// for auto generate based on entity 
// npx typeorm migration:generate ./src/core/database/migrations/InitUsersTable -d ./dist/config/data-source.config.js

// for run migration
// npx typeorm migration:run -d ./dist/config/data-source.config.js