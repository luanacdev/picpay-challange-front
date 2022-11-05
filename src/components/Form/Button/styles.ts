import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

interface IButtonProps {
  bgColor?: string
  fontColor?: string
}

export const ButtonSyles = styled.button`
  height: 30px;
  border: 0;
  border-radius: 6px;
  padding: 0 1.25rem;

  color: ${(props: IButtonProps) =>
    props.fontColor ? props.fontColor : '#fff'};

  font-weight: bold;

  background: ${(props: IButtonProps) =>
    props.bgColor ? props.bgColor : '#007DFE'};

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['blue-900']};
    transition: background-color 0.2s;
  }
`
export const ButtonCancel = styled(Dialog.Close)`
  height: 30px;
  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-300']};

  font-weight: bold;

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['gray-100']};
    transition: background-color 0.2s;
  }
`
export const ButtonCloseModal = styled(Dialog.Close)`
  border: 0;
  position: absolute;
  background: transparent;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`
