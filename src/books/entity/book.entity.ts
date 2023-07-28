import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from '../enum';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  tag: Tag;

  @Column()
  year: number;

  @Column()
  points: number;

  @Column({
    default:
      'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
  })
  image: string;
}
