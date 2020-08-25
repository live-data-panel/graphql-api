import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DeploymentEvent } from '../deployment-event/DeploymentEvent';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public userId: string;

    @Column({ unique: true })
    @Field()
    public username: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    public name: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    public email: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    public avatarUrl: string;

    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;

    @OneToMany(
        () => DeploymentEvent,
        deploymentEvent => deploymentEvent.user
    )
    public deploymentEvents: DeploymentEvent[];
}
