import { Resolver, Root, Subscription } from 'type-graphql';
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
