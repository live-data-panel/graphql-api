import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { DeploymentEvent } from './DeploymentEvent';
import { Inject } from 'typedi';
import { PubSubEngine } from 'graphql-subscriptions';

@EventSubscriber()
export class DeploymentEventSubscriber implements EntitySubscriberInterface<DeploymentEvent> {
    constructor(@Inject('pubsub') private readonly pubSub: PubSubEngine) {}

    listenTo() {
        return DeploymentEvent;
    }

    afterInsert(event: InsertEvent<DeploymentEvent>): void {
        this.pubSub.publish('DEPLOYMENT_EVENT', event.entity);
    }
}
