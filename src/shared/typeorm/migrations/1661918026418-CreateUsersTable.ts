import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateUsersTable1661918026415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isUnique: true,
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'username',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'password',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'accountId',
                  type: 'uuid',
                  isNullable: false,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }
}
