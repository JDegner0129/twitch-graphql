import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const Preview = new GraphQLObjectType({
  name: 'Preview',
  description: 'A preview thumbnail of a Twitch stream',
  fields: () => ({
    small: {
      type: GraphQLString,
      description: 'An 80x45 thumbnail',
    },
    medium: {
      type: GraphQLString,
      description: 'A 320x180 thumbnail',
    },
    large: {
      type: GraphQLString,
      description: 'A 640x360 thumbnail',
    },
    template: {
      type: GraphQLString,
      description: 'The template URL for preview thumbnails',
    },
  }),
});

export default Preview;
