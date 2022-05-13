import s from 'styled-components'
import {
  FUNKTURM_REGULAR,
  FUTURA_REGULAR,
  FUTURA_BOLD,
  FUTURA_MEDIUM,
  AGRANDIR_GRANDLIGHT,
  AGRANDIR_GRANDHEAVY,
  COOPER_NOUVEAU,
  ORIGIN_SUPER,
  BOOKMANIA
} from '../../../styles/font'

export const LoveHeading = s.div`
  width: fit-content;
  padding: .9rem 0.5rem 0 0.5rem;
  margin: 8rem auto 3rem;
  text-align: center;
  font-size: 4rem;
  line-height 4rem;
  border: 3px solid ${({ color = '#283033' }) => color};
  color: ${({ color = '#283033' }) => color};
  ${COOPER_NOUVEAU}

  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
    margin-top: 4rem;
  }
`

export const BoxedHeading = s.div`
  width: fit-content;
  padding: 0rem .5rem 0rem .5rem;
  margin: 4rem auto 3.4rem;
  text-align: center;
  text-transform: uppercase;
  -webkit-text-stroke: 1.5px #60B8E5;
  font-size: 6rem;
  line-height 6rem;
  border: 3px solid #60B8E5;
  color: ${({ color = '#60B8E5' }) => color};
  ${ORIGIN_SUPER}

  @media(max-width: 768px) {
    font-size: 5rem;
    line-height 5rem;
    margin-top: 4rem;
  }
`

export const Heading = s.div`
  width: fit-content;
  padding: 0rem;
  margin: 0rem;
  text-align: left;
  -webkit-text-stroke: 1.5px #573A78;
  font-size: 3.3rem;
  line-height 3.3rem;
  color: ${({ color = '#532E67' }) => color};
  ${AGRANDIR_GRANDHEAVY}

  @media(max-width: 768px) {
    font-size: 3.3rem;
    line-height 3.3rem;
  }
`

export const Container = s.div`
  position: relative;
`

export const Title = s.div` 
  text-align: center;
	position: absolute;
  top: 1.5%;
	z-index: 1000;
	width: 100%;
	height: auto;
	color: #532E67;
	font-size: 3.5em;
	${ORIGIN_SUPER}
	padding-left: 1rem;
	padding-top: 0.5rem;
	padding-right: 1rem;
	@media (max-width: 768px) {
		font-size: 3.2em;
	}
`

export const Tag = s.div` 
	float: left;
	position: absolute;
  top: 1.5%;
	left: 0px;
	z-index: 1000;
	width: 100%;
	height: auto;
	color: #532E67;
	font-size: 1.25em;
  line-height: 100%;
  padding-top: 0.5rem;
	${BOOKMANIA}
	@media (max-width: 768px) {
		font-size: 1.15em;
	}
`
export const Author = s.p`
	${FUTURA_REGULAR}
	text-transform: uppercase;
	font-size: 1.1vw;
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

export const InfoSubhead = s.div` 
	float: left;
	left: 0px;
	z-index: 1000;
	width: 100%;
	color: #532E67;
	font-size: 1em;
  line-height: 100%;
  padding-top: 0.5rem;
	${FUTURA_REGULAR}
	@media (max-width: 768px) {
		font-size: 1.15em;
	}
`

export const InfoAuthor = s.div` 
	float: left;
	left: 0px;
	z-index: 1000;
	width: 100%;
	color: #532E67;
	font-size: 1.5em;
  line-height: 100%;
  padding-top: 0.5rem;
  text-transform: uppercase;
	${FUTURA_MEDIUM}
	@media (max-width: 768px) {
		font-size: 1.15em;
	}
`

export const DropCap = s.span`
  float: left;
  margin-top: -3.3rem;
  font-size: 4.5rem;
  height: 5.7rem;
  color: ${({ color = 'white' }) => color};
  ${FUTURA_BOLD}

  @media(max-width: 768px) {
    font-size: 2rem;
    margin-top: -1.2rem;
    height: 2.6rem;
  }
`