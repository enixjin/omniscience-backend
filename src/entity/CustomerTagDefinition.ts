import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CustomerTagDefinition {
    @PrimaryGeneratedColumn()
    tagId: number;

    @Column()
    tagName: string;

    @Column('text')
    description: string;
}