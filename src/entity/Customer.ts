import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./Order";

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

    @OneToMany(() => Order, (Order) => Order.customer)
    orders: Order[]
}