import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import {FUTURA_REGULAR, FUTURA_BOLD} from '../../../styles/font'
import { useStaticQuery, graphql } from 'gatsby'

const CaptionDiv = s.div`
    background-color: rgba(0, 0, 0, 0.7);
`

const Container = s.div`
	border: 1px solid #DDDDDD;
	position: relative;
`

const Tag = s.div` 
	float: left;
	position: absolute;
	left: 0px;
	bottom: 0px;
	z-index: 1000;
	width: 100%;
	height: auto;
	background-color: rgba(0, 0, 0, 0.7);
	color: #FFFFFF;
	font-size: 0.75vw;
	${FUTURA_REGULAR}
	padding-left: 1rem;
	padding-top: 0.5rem;
	padding-right: 1rem;
	@media (max-width: 768px) {
		font-size: 1em;
	}
`
const Author = s.p`
	${FUTURA_BOLD}
	font-size: 0.75vw;
	@media (max-width: 768px) {
		font-size: 1em;
	}
	margin-bottom: 0.25rem;
`

const Multimedia = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "love-issue.json" } }) {
        edges {
          node {
            childrenLoveIssueJson {
							multimedia{
								author
								link
								title
								img {
									childImageSharp {
										fluid(maxWidth: 1000, maxHeight: 1000) {
											...GatsbyImageSharpFluid
											src
										}
									}
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: {childrenLoveIssueJson: articles },
  } = data.allFile.edges[0]
	const {multimedia} = articles[1]
  return (
		<>
			<Row>
				<Col sm={12} md={{ span: 3, offset: 2 }}>
					<Row>
						<Col sm={12} md={12}>
							<Container>
								<Tag>
									<p style={{marginBottom: "0.2rem"}}>{multimedia[0].title}</p>
									<Author>BY {multimedia[0].author}</Author>
								</Tag>
								<Img fluid={multimedia[0].img.childImageSharp.fluid}/>
							</Container>
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={12}>
						<Container>
								<Tag>
									<p style={{marginBottom: "0.2rem"}}>{multimedia[1].title}</p>
									<Author>BY {multimedia[1].author}</Author>
								</Tag>
								<Img fluid={multimedia[1].img.childImageSharp.fluid}/>
							</Container>
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={12}>
						<Container>
								<Tag>
									<p style={{marginBottom: "0.2rem"}}>{multimedia[2].title}</p>
									<Author>BY {multimedia[2].author}</Author>
								</Tag>
								<Img fluid={multimedia[2].img.childImageSharp.fluid} />
							</Container>
						</Col>
					</Row>
				</Col>
				<Col sm={12} md={5}>
					<Row>
						<Col sm={12} md={12}>
							<Img fluid={multimedia[0].img.childImageSharp.fluid} />
						</Col>
					</Row>
				</Col>
			</Row>
			</>
  )
}


export default Multimedia