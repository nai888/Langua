import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../../Notice/Notice'
import ButtonLink from '../../Button/ButtonLink'

import { canonical, siteTitle } from '../../../App'

const TreeHelp = (props) => (
  <div className={props.classes.treeHelp}>
    <Helmet>
      <title>{siteTitle} Tree Help</title>
      <meta name='description' content='LanguaTree is a tool for drawing and labeling syntax trees.' />
      <link rel='canonical' href={`${canonical}tree/help/`} />
    </Helmet>
    <ButtonLink route='/tree'>
      Back
    </ButtonLink>
    <h2 className='toolTitle'>LanguaTree Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

TreeHelp.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(TreeHelp)
