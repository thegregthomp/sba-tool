import {GraphQLNonNull, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean} from 'graphql'

import {Player} from '../types/Player'
import {Services} from '../../Services'

export default {
  stats: {
    type: Player,
    description: "Get individual player",
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: function(parent, {name}) {
      return Services.Player(name)
    }
  }
}
