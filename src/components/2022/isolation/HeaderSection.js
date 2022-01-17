import React from 'react'
import s from 'styled-components'
import { LORA_REGULAR, LORA_MEDIUM, LORA_BOLD } from '../../../styles/font'

const Container = s.div`
  width: 100%;
  padding: 3rem 0 2rem 0;
  background-color: #A38611;
`

const HeadingWrapper = s.div`
  width: 100%;
  padding: 1rem 3rem 0.4rem 3rem;
  margin: 0 0 1rem 0;
  text-align: left;
  font-size: 5rem;
  line-height 5rem;
  color: #942918;
  ${LORA_MEDIUM}
`

const SubheadingWrapper = s.div` 
  width: 100%;
  padding: 0rem 3rem 0 3rem;
  margin: 0.5rem 0 1rem 0;
  text-align: left;
  font-size: 2rem;
  line-height 2rem;
  color: #FFF;
  ${LORA_MEDIUM}
`

const AuthorWrapper = s.div` 
  width: 100%;
  padding: 0 3rem 0 3rem;
  margin: 0 0 0rem 0;
  text-align: left;
  font-size: 1.8rem;
  line-height 1.8rem;
  color: #FFF;
  ${LORA_REGULAR}
`

const IsolationContainer = s.div` 
  background-color: #942918;
  width: fit-content;
  margin: 3rem 3rem 3rem 3rem;
  padding: 2rem 2rem 2rem 2rem;
  max-width: min(100%, 800px);
  border-radius: 40px;
  border-style: solid;
  border-width: 3px;
  border-color: white;
`

const IsolationHeader = s.div` 
  margin: 0.5rem 0 1.5rem 0;
  text-align: left;
  font-size: 3rem;
  line-height 3rem;
  color: #FFF;
  ${LORA_BOLD}
`

const IsolationDescription = s.div` 
  margin: 0.5rem 0 0.5rem 0;
  text-align: left;
  font-size: 1.5rem;
  line-height 2rem;
  color: #FFF;
  ${LORA_REGULAR}
`


const HeaderSection = ({ title, authors, subhead }) => (
  <Container>
    <HeadingWrapper>{title}</HeadingWrapper>
    <SubheadingWrapper>{subhead}</SubheadingWrapper>
    <AuthorWrapper>{"By " + authors}</AuthorWrapper>
    <IsolationContainer>
      <IsolationHeader>I·so·la·tion /ˌīsəˈlāSH(ə)n/ noun</IsolationHeader>
      <IsolationDescription>The physical separation of individuals who have tested positive for COVID—19 from the rest of the Penn community; may occur in a range of places including but not limited to a dorm room, an off—campus apartment building, an abandoned sorority house, or a hotel suite.</IsolationDescription>
    </IsolationContainer>
  </Container>
)

export default HeaderSection
