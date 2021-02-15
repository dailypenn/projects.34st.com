
import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import {MainPara, ImgCaption} from './Shared.js'


const RowPlacement = s.div`
	padding: 2rem 5rem 5rem;
	background-color: #DFDDD0;
	@media(max-width: 768px) {
    padding: 0 2rem 2rem;
  }
`

const Section4 = ({json}) => (
	<RowPlacement>
		<Row>
			<Col md={7}>
				<MainPara>However, Kligman and Copelan claimed that "no subject suffered any toxic or harmful effect." Like the Dow Chemical records, research documents omitted the names of these participants, ensuring no one could perform a follow–up study on the exposed. According to The <i>Philadelphia Inquirer</i>, a memo by U.S. Army clinical research expert Lt. Col. M.G. Bottiglieri called Kligman’s medical reports "pure gibberish," "absolutely useless," and "an attempt to provide a facade of competence and ability." To this day, the University has not been able to measure the long-term effects of toxic chemical exposure on these men.</MainPara>
				<MainPara>The long-term implications of Kligman's tests haunt Anthony. At prison orientation, men told Anthony that he could enroll in Penn's experiments to earn extra money. After his second test, he wanted to stop due to the painful side effects. The incentive of earning cash, however, was too much to resist.</MainPara>
				<MainPara>"'I ain't getting on no more tests, man,'" Anthony remembers thinking after the second experiment damaged his intestines. "But sure enough, because if you don't have no money and you want to go to movies like everybody else, you got to get movie tickets. You can get new underwear, socks, and stuff like that when you have money. And I missed that."</MainPara>
				<MainPara>Anthony says he has worked odd jobs all his life but struggled to find permanent work. Now, he's on disability benefits.</MainPara>
				<MainPara>"I just get enough money to live from day to day," Anthony says. "This is a nightmare."</MainPara>
				<MainPara>"I'm always asked, 'What is your day to day life like?' Just existing &#8211; existing, you know. I wish things were a little better."</MainPara>
				<MainPara>Anthony's story &#8211; along with the many other men who live in pain &#8211; illustrates the unethical nature of paying incarcerated people to participate in medical experiments.</MainPara>
				<MainPara>"The Nuremberg Code says that [incarcerated people] can't be used as subjects because they are coerced. These patients were not given informed consent," says David Egilman, a <a target="_blank" href="https://www.sciencemag.org/news/2019/01/expert-witness-david-egilman-wins-billions-and-makes-enemies-he-fights-companies-over">public health expert</a> who has served as a witness in high-profile medical malpractice lawsuits. "People who are in prison are, by the very nature of imprisonment, coerced."</MainPara>
			</Col>
			<Col md={5}>
				<Img fluid={json.img.childImageSharp.fluid} />
				<ImgCaption>Albert Kligman sits surrounded by lab equipment, photos courtesy of Salvatore C. Dimarco Jr. for <i>The New York Times</i></ImgCaption>
			</Col>
		</Row>
	</RowPlacement>
)

export default Section4