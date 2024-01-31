import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column() //varchar 255
    name: string;
    
    @Column({ type: 'text' })
    description: string;
    
    @Column()
    image_url: string;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
}