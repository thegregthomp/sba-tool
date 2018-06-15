import React from 'react'
import PropTypes from 'prop-types'
import {graphql, QueryRenderer} from 'react-relay';

import environment from '../../Environment'
import Table from '../Table/Table'

class Stats extends React.Component {
  render() {
    const props = this.props;
    return (<QueryRenderer environment={environment} query={graphql `
        query StatsQuery($id: ID!) {
          stat(id: $id){
            id,
            type,
            name,
            players{
              Name,
              playerId,
              G,
              AB,
              R,
              H,
              BB,
              SINGLE,
              DOUBLE,
              TRIPLE,
              HR,
              RBI,
              AVG,
              SLG,
              TB,
              RBI,
              OBP,
              RUNC,
              OPS,
              ISO,
              GAME_LIMIT
            }
          }
        }
      `} variables={{
        id: props.id
      }} render={({error, props}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (<div>
          <Table players={props.stat.players}></Table>
        </div>);
      }}/>)
  }
}
export default Stats
