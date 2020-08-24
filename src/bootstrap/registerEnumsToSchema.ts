import { registerEnumType } from 'type-graphql';
import { DeploymentStatus } from '../models/pipeline/DeploymentStatus';

export const registerEnumsToSchema = () => {
    registerEnumType(DeploymentStatus, {
        name: 'DeploymentStatus',
    });
};
