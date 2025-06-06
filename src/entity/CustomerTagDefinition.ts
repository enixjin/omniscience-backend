import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("CustomerTagDefinition")
export class CustomerTagDefinition {
    @PrimaryGeneratedColumn()
    tagId: number;

    @Column()
    tagName: string;

    @Column('text')
    description: string;
}