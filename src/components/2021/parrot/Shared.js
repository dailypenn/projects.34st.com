import s from 'styled-components'

import { LIBRE_FRANKLIN_MEDIUM } from '../../../styles/font'

export const Circle = s.div`
  text-align: center;
  font-size: 0.7rem;
  padding-bottom: 1rem;
`
export const MainPara = s.p`
  font-size: 1.1rem;
  ${LIBRE_FRANKLIN_MEDIUM}
  @media(max-width: 768px) {
      font-size: 1rem;
    }
`
export const ImgCaption = s.p`
  font-size: 20px;
  width: 100%;
`
export const CenterDiv = s.div`
	display: flex;
	justify-content: center;
	align-items: center;
    height: 100%;
`
