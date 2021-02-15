import s from 'styled-components'
import React from 'react'

export const Hornblum = s.div`
	background-color: #DFDDD0;
	width: 100%;
	@media (max-width: 992px) {
		padding: 3rem 3rem;
	}
`

export const MainPara = s.p`
    font-size: 1.3rem;
    font-family: 'Libre Franklin', sans-serif;
    @media(max-width: 768px) {
        font-size: 1rem;
    }
`

export const CounterRowMargin = s.div`
	padding: 0 15px;
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
    flex: 5 1 3;
`