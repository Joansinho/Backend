import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number
    @Column ('varchar' , {length : 20})
    phone:string
    @Column('varchar')
    name: string
    @Column('varchar' , { length : 60 , default:"XXX"})
    addres: string
    @Column('text')
    topics: string
    @Column ({name: 'average_rating', type:'double'})
    averageRating: number
    @Column ({name:'create_at',type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date


}
