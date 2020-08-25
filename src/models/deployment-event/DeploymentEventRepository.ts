import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { DeploymentEvent } from './DeploymentEvent';

@Service()
@EntityRepository(DeploymentEvent)
export class DeploymentEventRepository extends Repository<DeploymentEvent> {}
