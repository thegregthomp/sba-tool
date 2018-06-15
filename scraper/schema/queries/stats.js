import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean} from 'graphql'

import {Stats} from '../types/Stats'
import {services} from '../../Services'


export default {
  stats: {
    type: new GraphQLList(Stats),
    description: "Get all stats",
    args:{},
    resolve:function(){
      return services.getStats()
    }
  }
}
