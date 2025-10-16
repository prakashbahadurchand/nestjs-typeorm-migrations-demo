import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTableColumnAdded1760615186082 implements MigrationInterface {
    name = 'UsersTableColumnAdded1760615186082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`bio\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`bio\``);
    }

}
