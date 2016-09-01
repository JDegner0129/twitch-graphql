// https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

import { getChannel } from '../../api';
import Channel from './Channel';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A Twitch user',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The ID of this user',
      resolve: user => user._id, // eslint-disable-line no-underscore-dangle
    },
    type: {
      type: GraphQLString,
      description: 'The type of this user',
    },
    name: {
      type: GraphQLString,
      description: 'The name of this user',
    },
    createdAt: {
      type: GraphQLString,
      description: 'The date on which this user was created',
      resolve: user => user.created_at,
    },
    updatedAt: {
      type: GraphQLString,
      description: 'The date on which this user was last updated',
    },
    logo: {
      type: GraphQLString,
      description: 'The URL for this user\'s logo',
    },
    displayName: {
      type: GraphQLString,
      description: 'The display name of this user',
      resolve: user => user.display_name,
    },
    bio: {
      type: GraphQLString,
      description: 'The biograph for this user',
    },
    channel: {
      type: Channel,
      description: 'The channel on which this user broadcasts',
      resolve: async user => await getChannel(user.name),
    },
  }),
});

export default User;
