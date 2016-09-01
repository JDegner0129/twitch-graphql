import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import { User } from './types';
import { getUser } from '../api';

const rootQueryType = new GraphQLObjectType({
  name: 'Twitch',
  fields: () => ({
    // https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser
    user: {
      type: User,
      args: {
        name: {
          description: 'The name for this user',
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (root, { name }) => await getUser(name),
    },
  }),
});

const TwitchSchema = new GraphQLSchema({
  query: rootQueryType,
  types: [User],
});

export default TwitchSchema;
