import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

const Hornblum = s.div`
	background-color: #DFDDD0;
`
const TextDGreen = s.h3`
	color: #2B3C2E;
	font-size: 3.3rem;
`
const QuoteAuthor = s.p`
	font-size: 2.3rem;
	line-height: 2.6rem;
	color: #2B3C2E;
`
const MainPara = s.p`
	font-size: 1.3rem;
	font-family: 'Libre Franklin', sans-serif;
`

const CounterRowMargin = s.div`
	padding: 0 15px;
`
const BigImgRight = s.div`
	@media (min-width: 992px) {
		padding: 0rem 3.9rem 2rem 5.9rem;
	}
`

const Section3 = () => (
	<>
		<Hornblum>
			<CounterRowMargin>
				<Row>
					<Col md={5} style={{padding: "0 6rem"}}>
						<div>
							<TextDGreen>"Holmesburg is the flip side of Tuskegee. At Tuskegee, you have sick men who were not treated. At Holmesburg, you have healthy men who were made ill."</TextDGreen>
							<QuoteAuthor>&nbsp; &nbsp; &nbsp; &#8211; Allen Hornblum</QuoteAuthor>
						</div>
					</Col>
					<Col md={7}>
						<div style={{padding: "0 4rem 2rem 2rem"}}>
							<MainPara>Dow was shocked. They had not approved this increase in dioxin application on human skin. Kligman had failed to answer their research question, proving only that the minimum dosage required to elicit a reaction was somewhere between 16 and 7,500 micrograms &#8211; a massive window. To make matters worse, because of Kligman's incoherent record-keeping, no one could conduct follow-ups on the affected participants. Dow Chemical walked away with no answers and left 70 incarcerated men with chronic pain.</MainPara> 
							<MainPara>That year, Kligman became the first researcher in the history of the Food and Drug Administration to be <a target="_blank" href="https://www.thedp.com/article/1995/05/u-involved-in-chemical-tests-on-prisoners#:~:text=Kligman%20Banned%20From%20Human%20Experiments,testing%20drugs%20on%20human%20subjects.&text=But%20the%20FDA%20ban%20did,human%20subjects%20with%20chemical%20agents.">banned</a> from testing drugs on human subjects. The FDA cited Kligman's sloppy work and inconsistent records in their decision. Nonetheless, he was reinstated a month later.</MainPara>
							<MainPara>In a 1980 <a target="_blank" href="https://www.nal.usda.gov/exhibits/speccoll/items/show/2078">hearing</a> by the Environmental Protection Agency on the dioxin experiments, V. K. Rowe, the former director of Toxicological Affairs and Health and Environment Research at Dow, said that Kligman "was a professor of Dermatology at the University of Pennsylvania, and we had reasonable confidence that he would proceed in a manner consistent with our original protocol."</MainPara>
							<MainPara>Rowe was wrong.</MainPara>
							<MainPara>Around the same time as the Dow Chemical experiments, <a target="_blank" href="https://www-proquest-com.proxy.library.upenn.edu/docview/1844544862/EE61B6BEB24840CDPQ/1?accountid=14707">320 men</a> at Holmesburg were turned "into human guinea pigs in secret chemical warfare experiments" through a $386,486 contract between Penn and the United States Army. In these experiments, Kligman and his associate Herbert W. Copelan, another physician at Penn, were tasked with finding the MED-50, or minimum effective dose necessary to mentally disable half of any given population, for a number of mind-altering drugs. Participants were paid $12 for medical screening and up to $25 for each set of experiments they participated in. After exposure to a number of chemicals, including elements of Agent Orange and psychoactive drugs, as well as chemicals Kligman hoped would "harden" the skin, participants experienced nausea, lightheadedness, delirium, hallucinations, and anxiety. Two-thirds of the participants in the study were Black men.</MainPara>
							<MainPara>Anthony says he has worked odd jobs all his life but struggled to find permanent work. Now, he's on disability benefits.</MainPara>
							<MainPara>"I just get enough money to live from day to day," Anthony says. "This is a nightmare."</MainPara>
							<MainPara></MainPara>
						</div>
					</Col>
				</Row>
			</CounterRowMargin>
			<BigImgRight>
				<Col md={7}>
					<MainPara>However, Kligman and Copelan claimed that "no subject suffered any toxic or harmful effect." Like the Dow Chemical records, research documents omitted the names of these participants, ensuring no one could perform a follow–up study on the exposed. According to The <i>Philadelphia Inquirer</i>, a memo by U.S. Army clinical research expert Lt. Col. M.G. Bottiglieri called Kligman’s medical reports "pure gibberish," "absolutely useless," and "an attempt to provide a facade of competence and ability." To this day, the University has not been able to measure the long-term effects of toxic chemical exposure on these men.</MainPara>
					<MainPara>The long-term implications of Kligman's tests haunt Anthony. At prison orientation, men told Anthony that he could enroll in Penn's experiments to earn extra money. After his second test, he wanted to stop due to the painful side effects. The incentive of earning cash, however, was too much to resist.</MainPara>
					<MainPara>"'I ain't getting on no more tests, man,'" Anthony remembers thinking after the second experiment damaged his intestines. "But sure enough, because if you don't have no money and you want to go to movies like everybody else, you got to get movie tickets. You can get new underwear, socks, and stuff like that when you have money. And I missed that."</MainPara>
				
				</Col>
			</BigImgRight>

		</Hornblum>

	</>
)

export default Section3