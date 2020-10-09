import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import Comment from '@modules/comments/infra/typeorm/entities/Comment';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  published: boolean;

  @Column()
  author_id?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'author_id' })
  author?: User;

  @OneToMany(() => Comment, comment => comment.post)
  comments?: Comment[];

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
export default Post;
