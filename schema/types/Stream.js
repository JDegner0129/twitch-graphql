// https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

import Preview from './Preview';

const Stream = new GraphQLObjectType({
  name: 'Stream',
  description: 'A live Twitch stream',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The ID for the stream',
      resolve: stream => stream._id, // eslint-disable-line no-underscore-dangle
    },
    game: {
      type: GraphQLString,
      description: 'The game being played',
    },
    viewers: {
      type: GraphQLInt,
      description: 'The number of current stream viewers',
    },
    averageFps: {
      type: GraphQLFloat,
      description: 'The average frames per second of the stream',
      resolve: stream => stream.average_fps,
    },
    delay: {
      type: GraphQLInt,
      description: 'The stream delay in seconds',
    },
    videoHeight: {
      type: GraphQLInt,
      description: 'The frame height of the stream video',
      resolve: stream => stream.video_height,
    },
    isPlaylist: {
      type: GraphQLBoolean,
      description: 'Whether or not the stream is a playlist',
      resolve: stream => stream.is_playlist,
    },
    createdAt: {
      type: GraphQLString,
      description: 'The time at which the stream began',
      resolve: stream => stream.created_at,
    },
    preview: {
      type: Preview,
      description: 'The preview thumbnails for this stream',
    },
  }),
});

export default Stream;
