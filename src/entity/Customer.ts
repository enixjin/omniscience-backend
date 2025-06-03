import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    customerId: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column('text')
    address: string;

    @Column('text')
    gender: string;

    @Column('text')
    title: string;
}