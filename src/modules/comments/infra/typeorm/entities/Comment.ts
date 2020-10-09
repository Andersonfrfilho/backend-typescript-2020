import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import Post from '@modules/posts/infra/typeorm/entities/Post';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  published: boolean;

  @Column()
  author_id: string;

  @Column()
  post_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'author_id' })
  author?: User;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id' })
  post?: Post;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
export default Comment;
