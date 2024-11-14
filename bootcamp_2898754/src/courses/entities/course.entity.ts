import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { miniumSkill } from "../enum/minimum.skill.enum";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: 'number';

    @Column({
        type:'varchar',
        length: 40,
    })
    title: string;

    @Column({
        type:'text'
    })
    description: string

    @Column({
        type:'date'
    })
    weeks: number

    @Column({
        type:'int'
    })
    tuiton: number

    @Column({
        type:'enum',
        enum:[ "Beginner",
            "Intermediate",
            "Advanced"],
        name:'minium_skill'
    })
    miniumSkill: miniumSkill //Tipo es el que se creo//

    @Column({
        type:'timestamp',
        default: () => 'CURRENT_TIMESTAMP', //Cabiar el valor por defecto, "Lo pone predetermiano a la hora actual"//
        name:'create_at'
    })
    createdAt: Date;

    @ManyToOne(()=> Bootcamp, (bootcamp: Bootcamp) => bootcamp.couser)
    bootcamps: Bootcamp //Relacion//
}
