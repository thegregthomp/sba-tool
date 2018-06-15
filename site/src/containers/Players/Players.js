import React from 'react'
import PropTypes from 'prop-types'
import {graphql, createFragmentContainer} from 'react-relay';

const Players = (props) => {
  return (<div>
    {props.name}
  </div>)
}

// export default createFragmentContainer(Players, graphql `
//         fragment Players_Players on Players{
//           stat(id: "mens_career"){
//             id,
//             players{
//               Name
//             }
//           }
//         }
//       `)
