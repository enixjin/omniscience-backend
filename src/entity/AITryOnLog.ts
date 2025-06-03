import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Product } from "./Product";

@Entity()
export class AITryOnLog {
    @PrimaryGeneratedColumn()
    logId: number;

    // @ManyToOne(() => Customer, customer => customer.aiTryOnLogs)
    // customer: Customer;

    // @ManyToOne(() => Product, product => product.topAITryOnLogs)
    // topProduct: Product;

    @ManyToOne(() => Product, product => product.productId)
    bottomProduct: Product;

    @Column('text')
    uploadImageUrl: string;

    @Column('text')
    tryOnImageUrl: string;

    @Column()
    timestamp: Date;
}