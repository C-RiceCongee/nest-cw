import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { TagsEntity } from '../tags/tags.Entity';
import { CategoriesEntity } from '../categories/categories.entity';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  content: string;
  // many 帖子 可能都是属于一个 one 类别 post实体的target CategoriesEntity ，第二个参数反查 就是前面函数返回值的实体 也要包含posts
  @ManyToOne(() => CategoriesEntity, (category) => category.posts)
  @JoinColumn({ name: 'cat_id', referencedColumnName: 'id' })
  category: CategoriesEntity;

  // many 帖子  -> one 用户
  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;

  @ManyToMany(() => TagsEntity, (tags) => tags.posts)
  tags: TagsEntity[];
}
