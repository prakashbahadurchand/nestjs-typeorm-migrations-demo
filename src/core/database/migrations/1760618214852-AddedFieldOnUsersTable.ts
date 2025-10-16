import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedFieldOnUsersTable1760618214852 implements MigrationInterface {
    name = 'AddedFieldOnUsersTable1760618214852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`intro\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`intro\``);
    }

}
