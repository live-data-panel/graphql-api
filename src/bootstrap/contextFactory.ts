import { Context } from '../models/Context';
import * as TypeORM from 'typeorm';
import { UserRepository } from '../models/user/UserRepository';
import { ExpressContext } from 'apollo-server-express/src/ApolloServer';

export const contextFactory = async ({ req }: ExpressContext): Promise<Context> => {
    return { req };
};
