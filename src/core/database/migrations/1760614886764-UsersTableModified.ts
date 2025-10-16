import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTableModified1760614886764 implements MigrationInterface {
    name = 'UsersTableModified1760614886764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a000cca60bcf04454e72769949\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`mobile\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_d376a9f93bba651f32a2c03a7d\` (\`mobile\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_d376a9f93bba651f32a2c03a7d\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`mobile\` \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a000cca60bcf04454e72769949\` ON \`users\` (\`phone\`)`);
    }

}
