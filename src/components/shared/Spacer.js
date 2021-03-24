import React from 'react'
import s from 'styled-components'

// COMPONENTS
export const Spacer = s.div`
  background-color: rgba(0, 0, 0, 0);
  height: ${({ height }) => height};
  width: 100%;
`