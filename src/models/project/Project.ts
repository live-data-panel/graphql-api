import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DeploymentEvent } from '../deployment-event/DeploymentEvent';

@Entity()
@ObjectType()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public projectId: string;

    @Column()
    @Field()
    public gitlabProjectId: string;

    @Column()
    @Field()
    public token: string;

    @Column()
    @Field()
    public name: string;

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
