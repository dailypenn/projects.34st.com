import s from 'styled-components'
import {
  FUNKTURM_REGULAR,
  FUTURA_REGULAR,
  FUTURA_BOLD,
  FUTURA_MEDIUM,
  AGRANDIR_GRANDLIGHT,
  AGRANDIR_GRANDHEAVY,
  MAGILIO,
  PEACHY_KEEN,
} from '../../../styles/font'

export const Heading = s.div`
  width: fit-content;
  padding: .5rem 1.2rem;
  margin: 4rem auto 1.2rem;
  text-align: center;
  -webkit-text-stroke: 1px #019676;
  font-size: 5rem;
  line-height 4rem;
  color: ${({ color = '#283033' }) => color};
  ${PEACHY_KEEN}

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
	left: 10px;
  top: 30px;
	z-index: 1000;
	width: 95%;
	height: auto;
	color: #FFFFFF;
	font-size: max(2vw, 20px);
  line-height: max(2vw, 20px);
	${PEACHY_KEEN}
	padding-left: 1rem;
	padding-top: 0.5rem;
	padding-right: 1rem;
  @media (max-width: 768px) {
		font-size: 2rem;
    line-height: 2.2rem;
	}
`

export const Tag = s.div` 
	float: left;
	position: absolute;
	left: 10px;
  bottom: 30px;
	z-index: 1000;
	width: 100%;
	height: auto;
	color: #FFFFFF;
	font-size: max(1.1vw, 14px);
  line-height: max(1.1vw, 14px);
	${FUTURA_REGULAR}
	padding-left: 1rem;
	padding-top: 0.5rem;
	padding-right: 1rem;
	@media (max-width: 768px) {
		font-size: 1em;
	}
`
export const Author = s.p`
	${FUTURA_REGULAR}
	text-transform: uppercase;
	font-size: max(1.1vw, 10px);
	@media (max-width: 768px) {
		font-size: 1em;
    }
    margin-top: 2rem;
	margin-bottom: .25rem;
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
