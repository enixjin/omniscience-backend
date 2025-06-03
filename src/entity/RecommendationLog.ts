import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";

@Entity()
export class RecommendationLog {
    @PrimaryGeneratedColumn()
    logId: number;

    @ManyToOne(() => Customer, customer => customer.recommendationLogs)
    customer: Customer;

    @Column('json')
    recommendationDetails: any;

    @Column()
    timestamp: Date;
}