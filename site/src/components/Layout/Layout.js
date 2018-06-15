import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';

const Layout = (props) => {
  const {children} = props;
  const {Fragment} = React;
  return (
    <Fragment>
      <main>
        {children}
      </main>
    </Fragment>
  )
}

export default Layout
