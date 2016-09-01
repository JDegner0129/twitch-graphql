// https://github.com/justintv/Twitch-API/blob/master/v3_resources/channels.md

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import Stream from './Stream';
import { getStream } from '../../api';

const Channel = new GraphQLObjectType({
  name: 'Channel',
  description: 'A Twitch channel',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The ID for this channel',
      resolve: channel => channel._id, // eslint-disable-line no-underscore-dangle
    },
    mature: {
      type: GraphQLBoolean,
      description: 'Whether or not this channel is intended for mature audiences',
    },
    status: {
      type: GraphQLString,
      description: 'The current status of the channel',
    },
    broadcasterLanguage: {
      type: GraphQLString,
      description: 'The language spoken by the broadcaster',
      resolve: channel => channel.broadcaster_language,
    },
    displayName: {
      type: GraphQLString,
      description: 'The displayed name for this channel',
      resolve: channel => channel.display_name,
    },
    game: {
      type: GraphQLString,
      description: 'The game being played on this channel',
    },
    delay: {
      type: GraphQLInt,
      description: 'The channel delay in seconds',
    },
    language: {
      type: GraphQLString,
      description: 'The language of this channel',
    },
    name: {
      type: GraphQLString,
      description: 'The name of this channel',
    },
    createdAt: {
      type: GraphQLString,
      description: 'The date on which this channel was created',
      resolve: channel => channel.created_at,
    },
    updatedAt: {
      type: GraphQLString,
      description: 'The date on which this channel was last updated',
      resolve: channel => channel.updated_at,
    },
    logo: {
      type: GraphQLString,
      description: 'The URL for this channel\'s logo',
    },
    banner: {
      type: GraphQLString,
      description: 'The URL for this channel\'s banner',
    },
    videoBanner: {
      type: GraphQLString,
      description: 'The URL for this channel\'s video banner',
      resolve: channel => channel.video_banner,
    },
    // TODO: implement background -- type unknown
    profileBanner: {
      type: GraphQLString,
      description: 'The URL for this channel\'s profile banner',
      resolve: channel => channel.profile_banner,
    },
    profileBannerBackgroundColor: {
      type: GraphQLString,
      description: 'The color of the profile banner background',
      resolve: channel => channel.profile_banner_background_color,
    },
    partner: {
      type: GraphQLBoolean,
      description: 'Whether or not this channel is a partner channel',
    },
    url: {
      type: GraphQLString,
      description: 'The URL for this channel',
    },
    views: {
      type: GraphQLInt,
      description: 'The number of views on this channel',
    },
    followers: {
      type: GraphQLInt,
      description: 'The number of followers this channel has',
    },
    stream: {
      type: Stream,
      description: 'The live stream for this channel',
      resolve: async channel => await getStream(channel.name),
    },
  }),
});

export default Channel;
