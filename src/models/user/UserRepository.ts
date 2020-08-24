import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { User } from './User';
import { WebhookUser } from '../webhook/WebhookHandler';

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public async register(webhookUser: WebhookUser): Promise<User> {
        const user = await this.findOne({
            where: {
                username: webhookUser.username,
            },
        });

        if (user) {
            return user;
        }

        const newUser = new User();
        newUser.username = webhookUser.username;
        newUser.name = webhookUser.name;
        newUser.email = webhookUser.email;
        newUser.avatarUrl = webhookUser.avatar_url;

        await this.save(newUser);

        return newUser;
    }
}
