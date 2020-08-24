import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { WebhookProject } from '../webhook/WebhookHandler';
import { Project } from './Project';

@Service()
@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
    public async register(webhookProject: WebhookProject, token: string): Promise<Project> {
        const project = await this.findOne({
            where: {
                gitlabProjectId: webhookProject.id,
                token,
            },
        });

        if (project) {
            return project;
        }

        const newProject = new Project();
        newProject.gitlabProjectId = webhookProject.id;
        newProject.name = webhookProject.name;
        newProject.avatarUrl = webhookProject.avatar_url;
        newProject.token = token;

        await this.save(newProject);
        return newProject;
    }
}
