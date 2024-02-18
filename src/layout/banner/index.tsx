import Button from '../../components/button'
import {
  BannerContainer,
  Message,
  MessageContainer,
  SubMessage,
} from './styles'

function Banner() {
  return (
    <BannerContainer>
      <MessageContainer>
        <Message>
          Estilo é um reflexo da sua atitude e sua personalidade
        </Message>
        <SubMessage>Hórario de funcionamento: 09:00 às 18:00</SubMessage>
      </MessageContainer>
      <Button />
    </BannerContainer>
  )
}

export default Banner
