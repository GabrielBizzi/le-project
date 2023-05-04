import React from 'react'
import {
  Container,
  Box,
  Typography,
  InputLabel,
  FormControl,
  Grid,
  TextField,
  Button,
} from '@mui/material'
import styles from './payment.module.css'
import { styled } from '@mui/material/styles'
import { Controller, useForm } from 'react-hook-form'
import { paymentSchema } from './validate'
import { yupResolver } from '@hookform/resolvers/yup'

export interface IForm {
  name: string | null
  number_card: string | null
  valid_date: string | null
  cvv: string | null
}

export interface IPaymentProps {
  states: {
    values: IForm
    setValues: React.Dispatch<React.SetStateAction<IForm>>
  }
}

const InputStyled = styled(TextField)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
  },
}))

const Payment: React.FC<IPaymentProps> = ({ states }) => {
  const handleChangeValue = (_event: any, label: string) => {
    states.setValues((prev) => ({ ...prev, [label]: _event.target.value }))
  }

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentSchema),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <Container
      style={{
        width: '100%',
        maxWidth: '100vw',
        padding: '20px 8px',
        background: '#f5f5f5',
      }}
      className={styles.container}
    >
      <Box className={styles.box}>
        <form id='id-form' onSubmit={handleSubmit((data) => console.log(data))}>
          <Controller
            name='number_card'
            control={control}
            render={({ field }) => (
              <React.Fragment>
                <Typography style={{ marginBottom: '15px' }} variant='h5'>
                  Cartão de crédito
                </Typography>
                <FormControl {...field} required fullWidth variant='standard'>
                  <InputLabel
                    style={{ fontSize: '20px', fontWeight: 500 }}
                    shrink
                    htmlFor='number_card'
                  >
                    Número
                  </InputLabel>
                  <InputStyled
                    helperText={
                      errors.number_card?.message ? (
                        <>{errors.number_card?.message}</>
                      ) : (
                        <>{errors.number_card?.message}</>
                      )
                    }
                    error={!!errors.number_card?.message}
                    variant='outlined'
                    fullWidth
                    id='number_card'
                    placeholder='0000 0000 0000 0000'
                  />
                </FormControl>
              </React.Fragment>
            )}
          />

          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <FormControl {...field} required fullWidth variant='standard'>
                <InputLabel style={{ fontSize: '20px', fontWeight: 500 }} shrink htmlFor='name'>
                  Nome do titular do cartão
                </InputLabel>
                <InputStyled
                  variant='outlined'
                  helperText={
                    errors.name?.message ? <>{errors.name?.message}</> : <>{errors.name?.message}</>
                  }
                  error={!!errors.name?.message}
                  fullWidth
                  id='name'
                  placeholder='Nome impresso no cartão'
                />
              </FormControl>
            )}
          />

          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <Controller
                name='valid_date'
                control={control}
                render={({ field }) => (
                  <FormControl {...field} required fullWidth variant='standard'>
                    <InputLabel
                      style={{ fontSize: '20px', fontWeight: 500 }}
                      shrink
                      htmlFor='valid_date'
                    >
                      Data de validade
                    </InputLabel>
                    <InputStyled
                      variant='outlined'
                      helperText={
                        errors.valid_date?.message ? (
                          <>{errors.valid_date?.message}</>
                        ) : (
                          <>{errors.valid_date?.message}</>
                        )
                      }
                      error={!!errors.valid_date?.message}
                      fullWidth
                      id='valid_date'
                      placeholder='MM/AAAA'
                    />
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Controller
                name='cvv'
                control={control}
                render={({ field }) => (
                  <FormControl required {...field} fullWidth variant='standard'>
                    <InputLabel style={{ fontSize: '20px', fontWeight: 500 }} shrink htmlFor='cvv'>
                      Código CVV
                    </InputLabel>
                    <InputStyled
                      variant='outlined'
                      helperText={
                        errors.cvv?.message ? (
                          <>{errors.cvv?.message}</>
                        ) : (
                          <>{errors.cvv?.message}</>
                        )
                      }
                      error={!!errors.cvv?.message}
                      fullWidth
                      id='cvv'
                      placeholder='000'
                    />
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default Payment
