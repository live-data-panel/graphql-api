import { AuthChecker } from 'type-graphql';
import { Context } from '../models/Context';

export const authChecker: AuthChecker<Context> = ({ context }): boolean => {
    return true;
};
