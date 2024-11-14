import { countReset } from "console";
import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('bootcamps')
export class Bootcamp {
    
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({
        type: 'varchar',
        length: 30,
    })
    name: string;

    @Column({
        type: 'integer'
    })
    phone: string;

    @Column({
        type:'text',
        nullable: true //Permite la opcion de NULL//
    })
    address: string;

    @Column({
        type:'text'
    })
    topics: string;

    @Column({
        type:'double',
        name:'average_rating' //Cambiar nombre en la BD//
    })
    avergeRating:number;

    @Column({
        type:'timestamp',
        default: () => 'CURRENT_TIMESTAMP', //Cabiar el valor por defecto, "Lo pone predetermiano a la hora actual"//
        name:'create_at'
    })
    createdAt: Date;

    @OneToMany(() => Course, (couser: Course)=> couser.bootcamps)
    couser:Course[]//Relacion 1 a *//
}
