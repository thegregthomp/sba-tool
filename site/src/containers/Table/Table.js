import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import classNames from 'classnames'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import _includes from 'lodash/includes';
import _maxBy from 'lodash/maxBy';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {fromJS, Map} from 'immutable'

import './Table.css'

class Table extends React.Component {

  state = {
    data: fromJS({
      playersBase: [],
      playersFiltered: [],
      columns: [],
      searchFiltered: [],
      selectedSearch: null,
      searched: false,
      filtered: false
    })
  }

  filtered = (column, value) => {
    if (!this.state.data.get('searched')) {
      if (column.length == 1 && (column[0].id == "G" || column[0].id == "Name")) {
        this.setState(({data}) => ({
          data: data.set('playersFiltered', data.get('playersBase')).set('filtered', false)
        }))
      } else {
        this.setState(({data}) => ({
          data: data.set('playersFiltered', data.get('playersBase').filter(result => result.GAME_LIMIT)).set('filtered', true)
        }))
      }
    }
  }
  customFilterMethod = (a, b) => {
    console.log(a, b)
  }
  setInitialColumns = () => {
    const columns = [
      {
        Header: '',
        id: 'rank',
        Cell: row => {
          let r = ''
          if (this.state.data.get('filtered')) {
            r = (row.viewIndex + 1) * (row.page + 1)
          }
          return r
        }
      }, {
        Header: 'Name',
        accessor: 'Name',
        minWidth: 200,
        // filterable:true,
      }, {
        Header: 'G',
        accessor: 'G',
        // Cell: row => {
        //   return <div style={{background:'green'}}>{row.value}</div>
        // }
      }, {
        Header: 'AB',
        accessor: 'AB'
      }, {
        Header: 'R',
        accessor: 'R'
      }, {
        Header: 'H',
        accessor: 'H'
      }, {
        Header: 'BB',
        accessor: 'BB'
      }, {
        Header: '1B',
        accessor: 'SINGLE'
      }, {
        Header: '2B',
        accessor: 'DOUBLE'
      }, {
        Header: '3B',
        accessor: 'TRIPLE'
      }, {
        Header: 'HR',
        accessor: 'HR'
      }, {
        Header: 'RBI',
        accessor: 'RBI'
      }, {
        Header: 'AVG',
        accessor: 'AVG'
      }, {
        Header: 'SLG',
        accessor: 'SLG'
      }, {
        Header: 'TB',
        accessor: 'TB'
      }, {
        Header: 'OBP',
        accessor: 'OBP'
      }, {
        Header: 'RUNC',
        accessor: 'RUNC'
      }, {
        Header: 'OPS',
        accessor: 'OPS'
      }, {
        Header: 'ISO',
        accessor: 'ISO'
      }, {
        Header: 'R/G',
        accessor: 'RPG'
      }, {
        Header: 'H/G',
        accessor: 'HPG'
      }, {
        Header: 'BB/G',
        accessor: 'BBPG'
      }, {
        Header: '1B/G',
        accessor: '1PG'
      }, {
        Header: '2B/G',
        accessor: '2PG'
      }, {
        Header: '3B/G',
        accessor: '3PG'
      }, {
        Header: 'HR/G',
        accessor: 'HRPG'
      }, {
        Header: 'TB/G',
        accessor: 'TBPG'
      }, {
        Header: 'RUNC/G',
        accessor: 'RUNCPG'
      }, {
        Header: 'BB/G',
        accessor: 'BBPG'
      }

    ]
    this.setState(({data}) => ({
      data: data.set('columns', columns)
    }));
  }
  cleanStats = (stats) => {
    const newPlayers = stats.map(player => {
      let newPlayer = Object.assign({}, player);
      newPlayer['AVG'] = this.turnToThreeDeci(newPlayer['AVG'])
      newPlayer['OBP'] = this.turnToThreeDeci(newPlayer['OBP'])
      newPlayer['SLG'] = this.turnToThreeDeci(newPlayer['SLG'])
      newPlayer['HPG'] = (newPlayer['H'] / newPlayer['G']).toFixed(2)
      newPlayer['RPG'] = (newPlayer['R'] / newPlayer['G']).toFixed(2)
      newPlayer['1PG'] = (newPlayer['SINGLE'] / newPlayer['G']).toFixed(2)
      newPlayer['2PG'] = (newPlayer['DOUBLE'] / newPlayer['G']).toFixed(2)
      newPlayer['3PG'] = (newPlayer['TRIPLE'] / newPlayer['G']).toFixed(2)
      newPlayer['HRPG'] = (newPlayer['HR'] / newPlayer['G']).toFixed(2)
      newPlayer['TBPG'] = (newPlayer['TB'] / newPlayer['G']).toFixed(2)
      newPlayer['RUNCPG'] = (newPlayer['RUNC'] / newPlayer['G']).toFixed(2)
      newPlayer['BBPG'] = (newPlayer['BB'] / newPlayer['G']).toFixed(2)

      return newPlayer
    })
    return newPlayers;
  }
  turnToThreeDeci = (stat) => {
    return (stat * .001).toFixed(3)
  }
  componentWillMount() {
    const self = this;
    const cleanUpStats = this.cleanStats(self.props.players);
    this.setState(({data}) => ({
      data: data.set('playersBase', cleanUpStats)
    }));
    this.setState(({data}) => ({
      data: data.set('playersFiltered', cleanUpStats)
    }));
    this.setState(({data}) => ({
      data: data.set('searchFiltered', self.cleanSearchData(cleanUpStats))
    }));
    this.setInitialColumns();
  }
  handleSearch = (event) => {
    if (event.length == 0) {
      this.setState(({data}) => ({
        data: data.set('playersFiltered', data.get('playersBase')).set('selectedSearch', null).set('searched', true)
      }))
      return
    }
    this.setState(({data}) => ({
      data: data.set('selectedSearch', event).set('searched', true)
    }));

    const idArray = event.map(s => (s.value))
    const newPlayers = this.state.data.get('playersBase').filter(player => {
      // console.log(idArray, player.playerId)
      return _includes(idArray, player.playerId)
    })

    console.log(_maxBy(newPlayers, function(o) {
      return o['HR'];
    }));

    this.setState(({data}) => ({
      data: data.set('playersFiltered', newPlayers)
    }))
  }
  cleanSearchData = (players) => {
    const cleanedData = players.map(player => {
      return ({value: player.playerId, label: player.Name})
    })

    return cleanedData;
  }
  render() {
    const data = this.state.data.get('playersFiltered')
    let sortData = this.state.data.get('searchFiltered')
    let selected = this.state.data.get('selectedSearch')
    const columns = this.state.data.get('columns')
    const tableClass = classNames([
      {
        '-striped': true,
        '-highlight': true,
        'Table': true
      }
    ])
    const barClass = classNames({'whiteBar': true})
    return (<Fragment>
      <div className={barClass}>
        <Select className="Searcher" placeholder="Search Players" name="form-field-name" value={selected} onChange={this.handleSearch} options={sortData} multi={true}/>
      </div>
      <ReactTable data={data} columns={columns} defaultSortDesc={true} pageSizeOptions={[50, 100]} className={tableClass} defaultPageSize={50} onSortedChange={this.filtered}></ReactTable>
    </Fragment>)
  }
}

export default Table;
