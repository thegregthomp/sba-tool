import {GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLList, GraphQLID, GraphQLBoolean} from 'graphql'

import {Stats} from './Stats'
import {services} from '../../Services'

export const Player = new GraphQLObjectType({
  name: "Player",
  desc: "Individual Players",
  fields: () => ({
    playerId: {
      type: GraphQLID,
      resolve: (parent) => parent['id'],
    },
    Name: {
      type: GraphQLString
    },
    "G": {
      type: GraphQLFloat
    },
    "AB": {
      type: GraphQLFloat
    },
    "R": {
      type: GraphQLFloat
    },
    "H": {
      type: GraphQLFloat
    },
    "SINGLE": {
      type: GraphQLFloat,
      resolve: (parent) => parent['1B'],
    },
    "DOUBLE": {
      type: GraphQLFloat,
      resolve: (parent) => parent['2B']
    },
    "TRIPLE": {
      type: GraphQLFloat,
      resolve: (parent) => parent['3B']
    },
    "HR": {
      type: GraphQLFloat
    },
    "RBI": {
      type: GraphQLFloat
    },
    "AVG": {
      type: GraphQLFloat
    },
    "SLG": {
      type: GraphQLFloat
    },
    "BB": {
      type: GraphQLFloat
    },
    "id": {
      type: GraphQLFloat
    },
    "TB": {
      type: GraphQLFloat
    },
    "OBP": {
      type: GraphQLFloat
    },
    "RUNC": {
      type: GraphQLFloat
    },
    "OPS": {
      type: GraphQLFloat
    },
    "ISO": {
      type: GraphQLFloat
    },
    "GAME_LIMIT": {
      type: GraphQLBoolean
    },
    // "stats": {
    //   type:new GraphQLList(Stats),
    //   resolve(post)=>{
    //     return Services.getStatsForPlayer(post.name);
    //   }
    // }
  })
})
