import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faUser, faCrown, faSignOutAlt, faHome, faArrowCircleLeft }
  from '@fortawesome/free-solid-svg-icons'

const faArrow =  <FontAwesomeIcon icon={faAngleDoubleDown} size="4x" />
const faMypage = <FontAwesomeIcon icon={faUser} size="2x" />
const faRanking = <FontAwesomeIcon icon={faCrown} size="2x" />
const faLogout = <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
const faMain = <FontAwesomeIcon icon={faHome} size="2x" />
const faBack = <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />


export {
  faArrow,
  faMypage,
  faRanking,
  faLogout,
  faMain,
  faBack,
}