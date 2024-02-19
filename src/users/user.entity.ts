import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn() //primary Key
    id:number;
    @Column()
    email:string;
    @Column()
    password:string;
}