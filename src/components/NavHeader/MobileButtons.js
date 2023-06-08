import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import menu from '../../images/menu.svg'
import vert_menu from '../../images/vert-menu.svg'
import { colors } from '../../shared/config'

const SquareButton = styled.button`
  width: 31px;
  height: 31px;
  background: ${colors.navActiveBtnBackground};
  border: 2px solid #000000;
  border-bottom: none;
  box-sizing: border-box;

  text-align: center;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #000000;

  transition: 0.2s;


`
const ButtonContainer = styled.div`
  z-index: 2002;

  top: -2px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const MobileButtons = (props) => {
  const [active, setActive] = useState(false)

  return (
    <ButtonContainer>
      <SquareButton
        color={active ? colors.navActiveBtnBackground : colors.navBtnBackground}
        onClick={() => {
          setActive(prevActive => !prevActive)
          props.callbacks.setShowNav(prevShow => !prevShow)
        }}
      >
        {
          !active ? (
            <img src={menu} alt="menu"/>
          ) : (
            <img src={vert_menu} alt="menu"/>
          )
        }
      </SquareButton>
    </ButtonContainer>
  )
}

MobileButtons.propTypes = {
  callbacks: PropTypes.shape({
    setShowNav: PropTypes.func
  }),
  history: PropTypes.object
}

export default withRouter(MobileButtons)
