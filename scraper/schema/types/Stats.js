import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql'
import {services} from '../../Services'
import {Player} from './Player'

export const Stats = new GraphQLObjectType({
  name: "Stats",
  description: "Different stat groupings",
  fields: () => ({
    "name": {
      type: GraphQLString
    },
    "id": {
      type: GraphQLString
    },
    "type": {
      type: GraphQLString
    },
    "url": {
      type: GraphQLString
    },
    "players": {
      type: new GraphQLList(Player),
      resolve: (source) => {
        return services.getPlayersByParent(source.id);
      }
    }
  })
})
