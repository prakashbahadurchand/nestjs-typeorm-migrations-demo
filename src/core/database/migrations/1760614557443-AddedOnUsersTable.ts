import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedOnUsersTable1760614557443 implements MigrationInterface {
    name = 'AddedOnUsersTable1760614557443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_a000cca60bcf04454e72769949\` (\`phone\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_a000cca60bcf04454e72769949\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone\``);
    }

}
