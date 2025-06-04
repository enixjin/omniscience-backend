import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Product } from "./Product";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    orderId: number;

    @Column()
    customerId: number;

    @Column()
    orderDate: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @Column()
    status: string;
}