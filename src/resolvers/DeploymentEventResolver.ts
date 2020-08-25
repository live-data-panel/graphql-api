import { Query, Resolver, Root, Subscription } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../models/user/UserRepository';
import { User } from '../models/user/User';
import { DeploymentEvent } from '../models/deployment-event/DeploymentEvent';

@Resolver(DeploymentEvent)
export class DeploymentEventResolver {
    @Subscription({
        topics: 'DEPLOYMENT_EVENT',
    })
    newDeploymentEvent(@Root() deploymentEvent: DeploymentEvent): DeploymentEvent {
        return deploymentEvent;
    }
}
