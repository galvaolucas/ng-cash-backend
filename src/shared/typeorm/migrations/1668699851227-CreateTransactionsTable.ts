import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTransactionsTable1668699851227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'transactions',
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
                    name: 'debitedAccountId',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'crediteddAccountId',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'value',
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
              ],
            }),
        )

        await queryRunner.createForeignKey(
            'transactions',
            new TableForeignKey({
                name: 'DebitedAccountId',
                columnNames: ['debitedAccountId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'accounts',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

          await queryRunner.createForeignKey(
            'transactions',
            new TableForeignKey({
              name: 'CreditedAccountId',
              columnNames: ['crediteddAccountId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'accounts',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions');
        await queryRunner.dropForeignKey('transactions', 'DebitedAccountId');
        await queryRunner.dropForeignKey('transactions', 'CreditedAccountId');
    }

}
