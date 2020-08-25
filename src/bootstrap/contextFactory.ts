import { Context } from '../models/Context';
import { ExpressContext } from 'apollo-server-express/src/ApolloServer';

export const contextFactory = async ({ req }: ExpressContext): Promise<Context> => {
    return { req };
};
