import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateAccountsTable1668698913253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'accounts',
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
                  name: 'balance',
                  type: 'decimal',
                  precision: 7,
                  scale: 2,
                  default: 100,
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

          await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
              name: 'UsersAccount',
              columnNames: ['accountId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'accounts',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('accounts');
        await queryRunner.dropForeignKey('users', 'UsersAccount');
    }

}
