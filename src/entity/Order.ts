import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Product } from "./Product";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    orderId: number;

    @ManyToOne(() => Customer, customer => customer.orders)
    customer: Customer;

    @Column()
    orderDate: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @ManyToOne(() => Product, product => product.orders)
    product: Product;

    @Column()
    status: string;
}