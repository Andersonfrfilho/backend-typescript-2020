import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import Office from './Office';
import Post from './Post';
import Comment from './Comment';
import Image from './Image';

enum ETypeUser {
  client = 'CLIENT',
  admin = 'ADMIN',
}
@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column()
  type: string;

  @ManyToOne(() => Post)
  posts: Post[];

  @ManyToOne(() => Comment)
  comments: Comment[];

  @OneToOne(type => Image)
  @JoinColumn()
  photo: Image;

  @ManyToMany(type => Office, office => office.users)
  offices: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export { User as default, ETypeUser };
