import React from 'react'
import s from 'styled-components'

import { FUTURA_REGULAR } from '../../styles/font'

const Credit = s.div`
  color: ${({ fontColor = '#000000' }) => fontColor};
  ${({ font = FUTURA_REGULAR }) => font}
  padding: 1rem;
  font-size: 80%;
  text-align: center;
  background-color: ${({ bgColor = '#FFFFFF' }) => bgColor};

  a {
    color: white;
    text-decoration: none !important;

    :hover {
      color: #B5B4B4;
      transition: 0.3s;
    }
  }
`

export const Footer = ({ font, emoji = '💖', bgColor, fontColor, year = '2021' }) => (
  <Credit font={font} bgColor={bgColor} fontColor={fontColor}>
    Made with&nbsp;<span role="img">{emoji}</span>&nbsp;by&nbsp;
    <a href="https://tech.thedp.com/" target="_blank" rel="noreferrer">
      The Daily Pennsylvanian Tech Department
    </a>
    &nbsp;&copy; {year}. All rights reserved.
  </Credit>
)
