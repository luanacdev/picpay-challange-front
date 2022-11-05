import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { postTask } from '../../../services/tasks.service'
import { MESSAGE } from '../../../utils/messages'
import {
  ButtonCancel,
  ButtonCloseModal,
  // eslint-disable-next-line prettier/prettier
  ButtonSyles
} from '../../Form/Button/styles'
import {
  ContainerInput,
  ErrorMessage,
  // eslint-disable-next-line prettier/prettier
  InputSyles
} from '../../Form/Input/styles'
import {
  ContainerButtons,
  ContainerRadioButtons,
  ContainerRow,
  Content,
  // eslint-disable-next-line prettier/prettier
  Overlay
} from './styles'

export function ModalAddPayment() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({
    name,
    username,
    title,
    value,
    date,
    isPayed,
  }: any) => {
    await postTask({
      id: Math.random(),
      name,
      username,
      title,
      value,
      date,
      isPayed,
    })
      .then(() => {
        window.alert('Pagamento criado com sucesso!')
      })
      .catch(() => {
        window.alert('Não foi possível criar pagamento!')
      })
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Adicionar pagamento</Dialog.Title>

        <ButtonCloseModal>
          <X size={24} />
        </ButtonCloseModal>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerRow>
            <ContainerInput>
              <InputSyles
                type="string"
                placeholder="Nome"
                required
                id="name"
                {...register('name', {
                  required: true,
                })}
              />
              {errors.name && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>

            <ContainerInput>
              <InputSyles
                id="username"
                type="string"
                placeholder="Usuário*"
                {...register('username', {
                  required: true,
                })}
              />
              {errors.username && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>
          </ContainerRow>

          <ContainerRow>
            <ContainerInput>
              <InputSyles
                id="title"
                type="string"
                placeholder="Título*"
                {...register('title', {
                  required: true,
                })}
              />
              {errors.title && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>

            <ContainerInput>
              <InputSyles
                type="number"
                placeholder="Valor*"
                id="value"
                {...register('value', {
                  required: true,
                })}
              />
              {errors.value && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>
          </ContainerRow>

          <ContainerRow>
            <ContainerInput>
              <InputSyles
                type="datetime-local"
                placeholder="Data"
                id="date"
                {...register('date', {
                  required: true,
                })}
              />
              {errors.date && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>

            <ContainerRadioButtons>
              <div>
                <p>Pago</p>
                <input
                  type="radio"
                  id="isPayed"
                  value="true"
                  {...register('isPayed', {
                    required: true,
                  })}
                />
              </div>
              <div>
                <p>Pendente</p>
                <input
                  type="radio"
                  id="isPayed"
                  value="false"
                  checked
                  {...register('isPayed', {
                    required: true,
                  })}
                />
              </div>
            </ContainerRadioButtons>
          </ContainerRow>

          <ContainerButtons>
            <ButtonSyles type="submit">SALVAR</ButtonSyles>
            <ButtonCancel>CANCELAR</ButtonCancel>
          </ContainerButtons>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
