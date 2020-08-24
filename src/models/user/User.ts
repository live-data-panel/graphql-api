import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public userId: string;

    @Column()
    @Field()
    public username: string;

    @Column()
    @Field()
    public name: string;

    @Column({ unique: true })
    @Field()
    public email: string;

    @Column()
    @Field()
    public avatarUrl: string;

    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
}
