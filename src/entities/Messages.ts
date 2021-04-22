import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";


@Entity("messages")
class Messages {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User) // Muitos para um...
    user: User;

    @Column()
    user_id: string;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Messages }