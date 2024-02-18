import styled from 'styled-components'
import { aboutbg } from '../../styles/themes/colors-global'

export const AboutContainer = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.4rem;
  background-color: ${aboutbg};
`

export const ImgsClients = styled.div`
  position: relative;
  bottom: 40px;
  height: 400px;
  width: 600px;
  img {
    position: relative;
    background-attachment: fixed;
    pointer-events: none;
  }
`
export const Img1 = styled.img`
  bottom: 100px;
`
export const Img2 = styled.img`
  bottom: 80px;
`
export const Img3 = styled.img`
  left: 60px;
`

export const Describe = styled.div`
  height: 100%;
  color: #ffff;
  width: 700px;
  text-align: justify;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 3rem;
`

export const Paragrapth = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.9rem;
  font-weight: 200;
  line-height: 40px;
`

export const HourOpen = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`
