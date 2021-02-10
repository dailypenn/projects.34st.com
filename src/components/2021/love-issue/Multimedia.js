import React from 'react'
import s from 'styled-components'
import {FUTURA_REGULAR} from '../../../styles/font'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import {Container, Tag, Author, LoveHeading, BoldText, RegularText} from '../../shared/index.js'
import { useStaticQuery, graphql } from 'gatsby'

const BoxedText = s.div`
  width: fit-content;
  padding: .5rem 1.2rem;
  font-size: 1.1vw;
  border: 3px solid #FDB6B0;
	color: #FDB6B0;
	${FUTURA_REGULAR}
  @media(max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 4rem;
  }
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
										fluid(maxWidth: 1000) {
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
			<LoveHeading color='#FDB6B0'>{'MULTIMEDIA'}</LoveHeading>
			<BoldText>VIDEO</BoldText>
    	<RegularText style = {{marginBottom: "1rem"}}>
      	It's Not You, It's COVID–19: Meet the Couples
      	<br />
      	Street sat down with two couples to learn more about their relationships,
      	and how they had to change once Penn shut down last March.
    	</RegularText>
			<Row>
				<Col sm={12} md={{ span: 3, offset: 2 }}>
					<Row style={{marginBottom: "1.5rem"}}>
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
					<Row style={{marginBottom: "1.5rem"}}>
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
					<Row style={{marginBottom: "1.5rem"}}>
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
					<Row style={{marginBottom: "1.5rem"}}>
							<Col sm={12} md={12}>
							<Container>
									<Tag>
										<p style={{marginBottom: "0.2rem"}}>{multimedia[3].title}</p>
										<Author>BY {multimedia[3].author}</Author>
									</Tag>
									<Img fluid={multimedia[3].img.childImageSharp.fluid}/>
								</Container>
							</Col>
						</Row>
						<Row style={{marginBottom: "1.5rem"}}>
							<Col sm={12} md={12}>
							<Container>
									<Tag>
										<p style={{marginBottom: "0.2rem"}}>{multimedia[4].title}</p>
										<Author>BY {multimedia[4].author}</Author>
									</Tag>
									<Img fluid={multimedia[4].img.childImageSharp.fluid}/>
								</Container>
							</Col>
						</Row>
						<Row style={{marginBottom: "1.5rem"}}>
							<Col sm={12} md={12}>
							<Container>
									<Tag>
										<p style={{marginBottom: "0.2rem"}}>{multimedia[5].title}</p>
										<Author>BY {multimedia[5].author}</Author>
									</Tag>
									<Img fluid={multimedia[5].img.childImageSharp.fluid}/>
								</Container>
							</Col>
						</Row>
				</Col>
			</Row>
			<Row style={{marginBottom: "1.5rem"}}>
				<Col md={2} style={{marginRight: "-4.2%", paddingRight: "5.5%"}}></Col>
				<Col sm={12} md={3}>
					<Container>
						<Tag>
							<p style={{marginBottom: "0.2rem"}}>{multimedia[6].title}</p>
							<Author>BY {multimedia[6].author}</Author>
						</Tag>
						<Img fluid={multimedia[6].img.childImageSharp.fluid} style={{height: "500px"}}/>
					</Container>
				</Col>
				<Col sm={12} md={3}>
					<Container>
						<Tag>
							<p style={{marginBottom: "0.2rem"}}>{multimedia[7].title}</p>
							<Author>BY {multimedia[7].author}</Author>
						</Tag>
						<Img fluid={multimedia[7].img.childImageSharp.fluid} style={{height: "500px"}}/>
					</Container>
				</Col>
				<Col sm={12} md={3}>
					<Container>
						<Tag>
							<p style={{marginBottom: "0.2rem"}}>{multimedia[8].title}</p>
							<Author>BY {multimedia[8].author}</Author>
						</Tag>
						<Img fluid={multimedia[8].img.childImageSharp.fluid} style={{height: "500px"}}/>
					</Container>
				</Col>
			</Row>
			<Row >
				<Col md={2} style={{marginRight: "-4.2%", paddingRight: "5.5%"}}></Col>
				<Col sm={12} md={4} style={{marginBottom: "3rem"}}>	
					<Container>
						<Tag>
							<p style={{marginBottom: "0.2rem"}}>{multimedia[9].title}</p>
							<Author>BY {multimedia[9].author}</Author>
						</Tag>
						<Img fluid={multimedia[9].img.childImageSharp.fluid}/>
					</Container>
				</Col>
				<Col sm={12} md={5} style={{marginBottom: "3rem", paddingTop: "2.5%"}}>	
					<BoxedText>
						<p>While none of us could have anticipated the effects that the advent of COVID-19 would have on our society, the hardships and grief of life under lockdown have certainly been felt by all of us. Seperated from our loved ones and facing a future full of uncertainty, quarantine has pushed us to find new ways to cope with our so-called "new normal".</p>
						<p>Street welcomed staffers to submtit photos of the things that brought them a sense of peace during this time. From snuggling with pets to exploring a new hobby, here are a few tidbits of positivity that helped our staff survive the past year.</p>
					</BoxedText>
				</Col>
			</Row>

		</>
  )
}


export default Multimedia