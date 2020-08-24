import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from './user/UserRepository';

export class WebhookHandler {
    constructor(@InjectRepository() private readonly userRepository: UserRepository) {}

    public register(body: object): void {}
}
