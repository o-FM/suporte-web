import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConnection1619165319468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(

            new Table({

                name: "connection",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true
                    },

                    {
                        name: "user_id",
                        type:"uuid"
                    },

                    {
                        name: "socket_id",
                        type: "varchar"
                    },

                    {
                        name: "created_at",
                        type:"timestamp",
                        default: "now()"
                    },

                    {
                        name: "updated_at",
                        type:"timestamp",
                        default: "now()"
                    }
                    
                ],

                foreignKeys:[
                    {
                        name: "FKConnectionUser",
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("connection")
    }

}
