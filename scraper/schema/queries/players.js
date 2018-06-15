import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean} from 'graphql'

import {Stats} from '../types/Stats'
import {services} from '../../Services'

export default {
    // players: {
    //     type: new GraphQLList(Player),
    //     description: "Get a list of players",
    //     args: { parentId: { type: new GraphQLNonNull(GraphQLInt) } },
    //     resolve: function (parent, {parentId}) {
    //         return Services.getPlayers(parentId);
    //     }
    // }
}
