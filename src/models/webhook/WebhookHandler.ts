import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../user/UserRepository';
import { DeploymentEvent } from '../pipeline/DeploymentEvent';
import { User } from '../user/User';
import { DeploymentStatus } from '../pipeline/DeploymentStatus';
import { DeploymentEventRepository } from '../pipeline/DeploymentEventRepository';
import { ProjectRepository } from '../project/ProjectRepository';
import { Project } from '../project/Project';

class WebhookBody {
    object_kind: WebhookKind;
    user: WebhookUser;
    project: WebhookProject;
}

class WebhookDeploymentEvent extends WebhookBody {
    status: string;
    commit_title: string;
}

export class WebhookUser {
    name: string;
    username: string;
    avatar_url: string;
    email: string;
}

export class WebhookProject {
    id: string;
    name: string;
    avatar_url: string;
}

enum WebhookKind {
    Deployment = 'deployment',
}

export class WebhookHandler {
    constructor(
        @InjectRepository() private readonly userRepository: UserRepository,
        @InjectRepository() private readonly projectRepository: ProjectRepository,
        @InjectRepository() private readonly deploymentEventRepository: DeploymentEventRepository
    ) {}

    public async register(body: WebhookBody, token: string): Promise<void> {
        const user = await this.userRepository.register(body.user);
        const project = await this.projectRepository.register(body.project, token);

        if (body.object_kind === WebhookKind.Deployment) {
            await this.registerDeploymentEvent(body as WebhookDeploymentEvent, project, user);
        }
    }

    private async registerDeploymentEvent(body: WebhookDeploymentEvent, project: Project, user: User) {
        const deploymentEvent = new DeploymentEvent();

        deploymentEvent.commitTitle = body.commit_title;
        deploymentEvent.status = body.status as DeploymentStatus;
        deploymentEvent.user = user;
        deploymentEvent.project = project;

        await this.deploymentEventRepository.save(deploymentEvent);
    }
}
