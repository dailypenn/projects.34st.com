import s from 'styled-components'

export const StyledLink = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

export const NavText = s.text`
  font-size: 80%;
  font-family: 'Libre Franklin', sans-serif;
  color: ${({ color = '#283033' }) => color};

  transition: 0.3s;

  :hover {
    color: #B5B4B4;
    transition: 0.3s;
  }
`
export const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`