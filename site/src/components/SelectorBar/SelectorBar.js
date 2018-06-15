import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import SelectField from 'material-ui/SelectField';
import React from 'react'
import PropTypes from 'prop-types'
import styles from './SelectorBar.css'

import _find from 'lodash/find';

const SelectorBar = (props) => {
  const selectedObj = _find(props.selectors, (o)=>{
    return o.id == props.selectedStatGroup
  })
  return (<Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Softball America Stats" className={styles.selectorLabel}/>
    </ToolbarGroup>
    <ToolbarGroup>

    </ToolbarGroup>
    <ToolbarGroup>
      <IconMenu iconButtonElement={<RaisedButton label={selectedObj.name} primary={true}/>}  onChange={props.change}>
        {props.selectors.map(stat=>(
          <MenuItem key={stat.id} value={stat.id} primaryText={stat.name}/>
        ))}
      </IconMenu>
    </ToolbarGroup>
  </Toolbar>)
}

export default SelectorBar
