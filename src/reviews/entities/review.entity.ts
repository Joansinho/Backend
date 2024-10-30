import { text } from "stream/consumers"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity ('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar',length: 100,nullable: false})
    title: string
    @Column ({type:'text',nullable: false})
    commet: string
    @Column ({type: 'tinyint',nullable:false})
    rating: number
}

