import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar', length : 100, nullable: true })
        title: string
        @Column ({type: 'varchar', nullable: true})
    description: string
    @Column ({type: 'tinyint', nullable: true, default: 4})
    week: number;
    @Column ({type: 'decimal', nullable:true})  
    tuition: number
    @Column ( {name:'minimun_skill', type: 'enum', enum:["Beginner","Intermediate","Advance"]})
    minimunSkill: minimunSkill 
    @Column('date')
    createAt: Date

    
}
enum minimunSkill {
    
}
