import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    productName: string;

    @Column()
    gender: string;

    @Column()
    category: string;

    @Column()
    subCategory: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column('text')
    imageUrl: string;

    @Column('text')
    description: string;
}