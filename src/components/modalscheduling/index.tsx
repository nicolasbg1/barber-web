import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, Title } from './styles'
import { X } from 'phosphor-react'

export function ModalScheduling() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title> Agendar horário </Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <label htmlFor="">Nome completo</label>
          <input type="text" placeholder="Digite seu nome" required />
          <label htmlFor="">Telefone</label>
          <input type="text" placeholder="Digite seu Telefone" required />
          <label htmlFor="">Selecione a data</label>
          <input type="text" placeholder="01/02/2024" required />{' '}
          <label htmlFor="">Selecione uma unidade</label>
          <input type="text" placeholder="Porto Seguro - CENTRO" required />
          <button type="submit">Agendar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
