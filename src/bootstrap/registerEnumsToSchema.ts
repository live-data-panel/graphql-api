import { registerEnumType } from 'type-graphql';
import { DeploymentEventStatus } from '../models/deployment-event/DeploymentEventStatus';

export const registerEnumsToSchema = () => {
    registerEnumType(DeploymentEventStatus, {
        name: 'DeploymentEventStatus',
    });
};
