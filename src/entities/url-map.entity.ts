import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UrlMap')
export class UrlMapEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Index()
  url!: string;

  @Column()
  @Index()
  shortUrl!: string;
}
