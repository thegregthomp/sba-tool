import {GraphQLSchema, GraphQLObjectType} from "graphql"

import stats from './queries/stats'
import stat from './queries/stat'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: ()=>({
      ...stats,
      ...stat
    })
  }),
  mutation: null
})

export default schema
