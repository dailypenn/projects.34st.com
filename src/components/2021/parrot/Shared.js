import s from 'styled-components'

export const Circle = s.div`
  text-align: center;
  font-size: 0.7rem;
  padding-bottom: 1rem;
`
export const MainPara = s.p`
    font-size: 1.5rem;
    font-family: 'Libre Franklin', sans-serif;
    @media(max-width: 768px) {
        font-size: 1rem;
    }
`
export const ImgCaption = s.p`
    font-size: .6rem;
    width: 100%;
    margin-top: 1rem;
`
export const CenterDiv = s.div`
	display: flex;
	justify-content: center;
	align-items: center;
    height: 100%;
`
