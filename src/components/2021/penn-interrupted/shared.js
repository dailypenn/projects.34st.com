import s from 'styled-components'
import {
  FUNKTURM_REGULAR,
  FUTURA_REGULAR,
  FUTURA_BOLD,
  FUTURA_MEDIUM,
  AGRANDIR_GRANDLIGHT,
  AGRANDIR_GRANDHEAVY,
  MAGILIO,
  DERIVIA,
  AGRANDIR_REGULAR,
  AGRANDIR_TEXTBOLD,
} from '../../../styles/font'

export const Heading = s.div`
  width: fit-content;
  padding: 0.5rem 1.2rem;
  margin: 4rem auto 1.2rem;
  text-align: center;
  -webkit-text-stroke: 1px #000;
  font-size: 3rem;
  line-height 4rem;
  text-transform: uppercase;
  color: ${({ color = '#283033' }) => color};
  ${AGRANDIR_REGULAR}

  @media(max-width: 992px) {
    font-size: 2.4rem;
    line-height 3rem;
    margin-top: 3rem;
  }
`

export const Container = s.div`
	border: 1px solid #DDDDDD;
  position: relative;
`

export const MajorSection = s.div` 
	z-index: 1000;
  width: 100%;
  text-align: center;
	height: auto;
	color: #111;
	font-size: 25px;
  margin-bottom: 15px;
	${AGRANDIR_TEXTBOLD}
`

export const Section = s.div` 
	z-index: 1000;
  width: fit-content;
	height: auto;
	color: #111;
	font-size: 14px;
  padding: 6px 10px 3px 10px;
  border-radius: 20px;
  background-color: #F8B3AE;
  margin-bottom: 20px;
	${AGRANDIR_TEXTBOLD}
`

export const MajorTitle = s.div` 
	z-index: 1000;
	width: 100%;
	height: auto;
  text-align: center;
	color: #111;
	font-size: 1.7vw;
  line-height: 2.5vw;
	${AGRANDIR_REGULAR}
  &:hover {
    color: #111;
  }
`

export const Title = s.a` 
	z-index: 1000;
	width: 95%;
	height: auto;
	color: #DFDA00;
	font-size: 1.7vw;
  line-height: 2.5vw;
	${AGRANDIR_REGULAR}
  @media (max-width: 992px) {
		font-size: 3.3vw;
    line-height: 4vw;
	}
  &:hover {
    color: #DFDA00;
  }
`

export const Tag = s.div` 
	z-index: 1000;
	width: 100%;
	height: auto;
	color: #FFFFFF;
	font-size: max(1.1vw, 14px);
  line-height: max(1.1vw, 14px);
	${FUTURA_REGULAR}
	@media (max-width: 768px) {
		font-size: 1em;
	}
`

export const Author = s.p`
	${AGRANDIR_TEXTBOLD}
  color: #DFDA00;
	text-transform: uppercase;
	font-size: 14px;
  margin-top: 0.8rem;
	@media (max-width: 992px) {
    margin-top: 1.2rem;
    font-size: 2.3vw;
  }
`

export const MajorAuthor = s.p`
	${AGRANDIR_TEXTBOLD}
  width: 100%;
  text-align: center;
  color: #111;
	text-transform: uppercase;
	font-size: 14px;
  margin-top: 1rem;
`

export const BoldText = s.div`
  font-size: 1.7rem;
  ${FUTURA_BOLD}
  text-align: center;
  margin: auto;
  max-width: 75%;

  @media(max-width: 992px) {
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
