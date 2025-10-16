import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedFieldsInProfilesTable1760617619866 implements MigrationInterface {
    name = 'AddedFieldsInProfilesTable1760617619866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profiles\` ADD \`location\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` ADD \`website\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profiles\` DROP COLUMN \`website\``);
        await queryRunner.query(`ALTER TABLE \`profiles\` DROP COLUMN \`location\``);
    }

}
