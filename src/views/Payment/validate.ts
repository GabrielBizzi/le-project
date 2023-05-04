import { object, string } from 'yup'

export const paymentSchema = object()
  .shape({
    name: string().nullable().required('Insira um nome válido.'),
    number_card: string().nullable().required('Insira um número de cartão válido.'),
    valid_date: string().nullable().required('Insira uma data válida.'),
    cvv: string().nullable().required('Insira um CVV válido.'),
  })
  .required()
