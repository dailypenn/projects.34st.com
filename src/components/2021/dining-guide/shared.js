import s from 'styled-components'
import {
  FUNKTURM_REGULAR,
  FUTURA_REGULAR,
  FUTURA_BOLD,
  FUTURA_MEDIUM
} from '../../../styles/font'

export const Heading = s.div`
  width: fit-content;
  padding: .5rem 1.2rem;
  margin: 4rem auto 0.2rem;
  text-align: center;
  font-size: 3rem;
  line-height 4rem;
  color: ${({ color = '#283033' }) => color};
  ${FUNKTURM_REGULAR}

  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
    margin-top: 4rem;
  }
`

export const Container = s.div`
	border: 1px solid #DDDDDD;
    position: relative;
`

export const Title = s.div` 
	float: left;
	position: absolute;
	left: 0px;
  top: 20px;
	z-index: 1000;
	width: 100%;
	height: auto;
	color: #FFFFFF;
	font-size: 1.5vw;
	${FUTURA_REGULAR}
	padding-left: 1rem;
	padding-top: 0.5rem;
	padding-right: 1rem;
	@media (max-width: 768px) {
		font-size: 1em;
	}
`

export const Tag = s.div` 
	float: left;
	position: absolute;
	left: 0px;
  bottom: 0px;
	z-index: 1000;
	width: 100%;
	height: auto;
	color: #FFFFFF;
	font-size: 1.5vw;
	${FUTURA_REGULAR}
	padding-left: 1rem;
	padding-top: 0.5rem;
	padding-right: 1rem;
	@media (max-width: 768px) {
		font-size: 1em;
	}
`
export const Author = s.p`
	${FUTURA_BOLD}
	text-transform: uppercase;
	font-size: 0.75vw;
	@media (max-width: 768px) {
		font-size: 1em;
    }
    margin-top: 2rem;
	margin-bottom: 0.25rem;
`

export const BoldText = s.div`
  font-size: 1.7rem;
  ${FUTURA_BOLD}
  text-align: center;
  margin: auto;
  max-width: 75%;

  @media(max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    padding: 0 1rem;
  }
`

export const RegularText = s.div`
  font-size: 1.2rem;
  ${FUTURA_MEDIUM}
  text-align: center;
  max-width: 75%;
  margin: auto;
  padding: 1.5rem 0;

  @media(max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    padding: 0.5rem 1rem;
  }
`
