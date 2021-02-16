
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn} from "typeorm";
  
  @Entity()
  export class Url extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    original_url: string;
  
    @Column()
    new_url: string;

    @Column()
    expires_at: Date;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }