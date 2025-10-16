import { MigrationInterface, QueryRunner } from "typeorm";

export class InitProfilesTableWithUsersTable1760617433668 implements MigrationInterface {
    name = 'InitProfilesTableWithUsersTable1760617433668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profiles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`avatarUrl\` varchar(255) NULL, \`bio\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`profiles\``);
    }

}
