import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column ('varchar')
    name : string
    @Column('varchar')
    email: string
    @Column ('varchar')
    role : string
    @Column ('varchar')
    password : string
}
