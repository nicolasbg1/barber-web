import styled from 'styled-components'
import { buttonbg, buttonhover } from '../../global-styles/colors-global'

export const ButtonContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  background-color: ${buttonbg};
  border-radius: 10px;

  &:hover {
    background-color: ${buttonhover};
  }
`

export const ButtonComponent = styled.button`
  border: none;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  background-color: transparent;
  font-weight: 100;
  font-size: 1rem;
`
