import {GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString,GraphQLID, GraphQLList, GraphQLBoolean} from 'graphql'

import {Stats} from '../types/Stats'
import {services} from '../../Services'


export default {
  stat: {
    type: Stats,
    description: "Get specific segment stats",
    args:{
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve:function(parent,{id}){
      return services.getStat(id)
    }
  }
}
