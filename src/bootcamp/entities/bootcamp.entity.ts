import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bootcamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  address: string;

  @Column()
  topics: string;

  @Column({ name: 'avarega_rating' })
  averageRating: number;

  @Column()
  createAt: Date;
}
