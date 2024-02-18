import Client1 from '../../assets/images/client.jpg'
import Client2 from '../../assets/images/client1.jpg'
import Client3 from '../../assets/images/client2.jpg'
import {
  AboutContainer,
  Describe,
  HourOpen,
  Img1,
  Img2,
  Img3,
  ImgsClients,
  Paragrapth,
  Title,
} from './styles'

function About() {
  return (
    <AboutContainer>
      <ImgsClients>
        <Img3 src={Client3} />
        <Img2 src={Client2} />
        <Img1 src={Client1} />
      </ImgsClients>
      <Describe>
        <Title>Sobre</Title>

        <Paragrapth>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          perferendis, nobis? Odit adipisci, sequi perspiciatis impedit nulla
          officia nam, tempore dolore inventore quaerat fugiat sed beatae earum
          quo.
        </Paragrapth>

        <Paragrapth>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          perferendis, nobis? Odit adipisci, sequi perspiciatis impedit nulla
          officia nam, tempore dolore inventore quaerat fugiat sed beatae earum
          quo.
        </Paragrapth>

        <HourOpen>Horário de funcionamento 09 as 18:00, Seg a Sex</HourOpen>
      </Describe>
    </AboutContainer>
  )
}

export default About
