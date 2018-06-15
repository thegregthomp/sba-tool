import React, { Component, Fragment } from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import {fromJS, Map} from 'immutable'

import Layout from './components/Layout/Layout'
import environment from './Environment'

import Stats from './containers/Stats/Stats'
import SelectorBar from './components/SelectorBar/SelectorBar'

import styles from './App.css';

class App extends Component {
  state = {
    data: fromJS({selectedStatGroup:'mens_career'})
  }
  handleChange = (event,index,value) => {
    console.log(event,index,value)
    this.setState(({data}) => ({
      data: data.set('selectedStatGroup', index)
    }))
  };
  render() {
    const statGroupId = this.state.data.get('selectedStatGroup')
    return (<QueryRenderer environment={environment} query={graphql `
        query AppQuery{
          stats{
            id,
            name
          }
        }
      `} variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (<div>
          <Layout>
            <SelectorBar change={this.handleChange} selectors={props.stats} selectedStatGroup={statGroupId}></SelectorBar>
            <Fragment>
              <Stats id={statGroupId}></Stats>
            </Fragment>
          </Layout>
        </div>);
      }}/>)
  }
}

export default App;
