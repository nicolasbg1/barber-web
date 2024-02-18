import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import {
  buttonbg,
  buttonhover,
  modalbackground,
  modaltitle,
} from '../../styles/themes/colors-global'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgb(0, 0, 0, 0.82);
`
export const Title = styled(Dialog.Title)`
  text-align: center;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${modalbackground};
  color: ${modaltitle};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button {
      height: 58px;
      border: 0;
      background: ${buttonbg};
      color: white;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover {
        background: ${buttonhover};
        color: white;
        transition: background-color 0.9s;
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.8rem;
  right: 2.8rem;
  line-height: 0;
  cursor: pointer;
  color: white;
`
