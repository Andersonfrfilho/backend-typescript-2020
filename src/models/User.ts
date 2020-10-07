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
  OneToMany,
  JoinTable,
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

  @Column()
  image_id?: string;

  @OneToOne(() => Image)
  @JoinColumn({ name: 'image_id' })
  photo?: Image;

  @OneToMany(() => Post, post => post.author)
  posts?: Post[];

  @OneToMany(() => Comment, comment => comment.author)
  comments?: Comment[];

  @ManyToMany(() => Office)
  @JoinTable({
    name: 'user_office',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'office_id' },
  })
  offices?: Office[];

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
export { User as default, ETypeUser };
