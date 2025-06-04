import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    chatId: number;

    @Column()
    customerId: number;

    @Column()
    SA_Id: number;

    @Column('text')
    message: string;

    @Column()
    timestamp: Date;
}