import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DeploymentStatus } from './DeploymentStatus';
import { User } from '../user/User';
import { Project } from '../project/Project';

@Entity()
@ObjectType()
export class DeploymentEvent {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public deploymentEventId: string;

    @Column({ type: 'enum', enum: DeploymentStatus })
    @Field(() => DeploymentStatus)
    public status: DeploymentStatus;

    @Column()
    @Field()
    public commitTitle: string;

    @ManyToOne(
        () => User,
        user => user.deploymentEvents
    )
    @Field(() => User)
    public user: User;

    @ManyToOne(
        () => Project,
        project => project.deploymentEvents
    )
    @Field(() => Project)
    public project: Project;

    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
}
