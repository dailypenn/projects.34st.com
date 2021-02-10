import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'react-bootstrap/Carousel'
import { FUNKTURM_REGULAR, FUTURA_REGULAR } from '../../../styles/font'


const EssayHeading = s.div`
  width: fit-content;
  padding: .5rem 1.2rem;
  margin: 2rem auto 2rem;
  text-align: center;
  font-size: 4rem;
  line-height 4rem;
  border: 3px solid #FDB6B0;
  color: #FDB6B0;
  ${FUNKTURM_REGULAR};
  @media(max-width: 768px) {
    font-size: 3rem;
    line-height 3rem;
  }
`

const EssayCarousel = ({articles}) => (
	<>
		<EssayHeading>ESSAY WINNERS</EssayHeading>
		<Carousel style={{width: "1000px", margin: "auto"}}>
			{articles &&
				articles.map(article => (  
					<Carousel.Item interval={3500}>
					<Img
						className="d-block w-100"
						fluid={article.img.childImageSharp.fluid}
						alt="First slide"
					/>
					<Carousel.Caption style={{background: "rgba(0, 0, 0, 0.7)", paddingLeft: "50px", paddingRight: "50px"}}>
						<h3>{article.title}</h3>
						<p style={{marginBottom: "5px"}}>{article.subhead}</p>
						<p>{article.author}</p>
					</Carousel.Caption>
				</Carousel.Item>
				))}
		</Carousel>
	</>
)

export default EssayCarousel