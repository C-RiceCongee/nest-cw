import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostsEntity } from '../posts/posts.entity';

@Entity('tags')
export class TagsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;
  // () => PostsEntity 指定查询关联实体，(post) => post.tags 指定反查字段
  @ManyToMany(() => PostsEntity, (post) => post.tags)
  @JoinTable({ name: 'posts_tags' })
  posts: PostsEntity;
}
