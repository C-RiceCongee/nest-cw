import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostsEntity } from '../posts/posts.entity';

@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cover: string;

  @OneToMany(() => PostsEntity, (post) => post.category)
  posts: PostsEntity[];
}
