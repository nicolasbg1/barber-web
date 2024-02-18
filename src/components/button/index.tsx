import * as Dialog from '@radix-ui/react-dialog'
import { ModalScheduling } from '../modalscheduling'
import { ButtonComponent, ButtonContainer } from './styles'

function Button() {
  return (
    <ButtonContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonComponent>Agendar horário</ButtonComponent>
        </Dialog.Trigger>
        <ModalScheduling />
      </Dialog.Root>
    </ButtonContainer>
  )
}

export default Button
