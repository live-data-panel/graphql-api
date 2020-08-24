import { Query, Resolver } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../models/user/UserRepository';
import { User } from '../models/user/User';

@Resolver(User)
export class UserResolver {
    public constructor(@InjectRepository() private readonly userRepository: UserRepository) {}

    @Query(() => [User], { description: 'Get users' })
    public async users(): Promise<User[]> {
        return this.userRepository.find();
    }
}
