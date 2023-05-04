import { CssBaseline, AppBar, Button, Stepper, Step, StepLabel, StepContent } from '@mui/material'
import React, { useEffect } from 'react'
import BagTab from './Bag/Bag'
import Payment, { IForm } from './Payment/Payment'
import Main from '@components/Main/Main'
import Finish from './Finish/Finish'
import { AntTab, AntTabs, TabPanel, a11yProps } from './utils'
import styles from './shopping.module.css'
import './global.css'
import { paymentSchema } from './Payment/validate'
import useWindowDimensions from '@hooks/windowDimensions'

export const Shopping: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const [errors, setErrors] = React.useState<IForm>({} as IForm)
  const { width } = useWindowDimensions()
  const [values, setValues] = React.useState<IForm>({
    cvv: null,
    name: null,
    number_card: null,
    valid_date: null,
  })

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleSubmit = async () => {
    if (value !== 2) {
      setValue((prevActiveStep) => prevActiveStep + 1)
    } else {
      setValue(0)
    }
  }

  const tabItems = [
    {
      index: 0,
      value: value,
      label: 'Sacola',
      content: <BagTab />,
      props: { ...a11yProps(0) },
    },
    {
      index: 1,
      value: value,
      label: 'Pagamento',
      content: <Payment states={{ values: values, setValues: setValues }} />,
      props: { ...a11yProps(1) },
    },
    {
      index: 2,
      value: value,
      label: 'Confirmação',
      content: <Finish />,
      props: { ...a11yProps(2) },
    },
  ]

  return (
    <React.Fragment>
      <Main>
        <CssBaseline />

        {width <= 1024 ? (
          <React.Fragment>
            <AppBar position='static' style={{ background: 'transparent' }}>
              <AntTabs
                value={value}
                onChange={handleChange}
                centered
                aria-label='full width tabs example'
              >
                {tabItems.map((item, _index) => (
                  <AntTab key={_index} label={item.label} {...item.props} />
                ))}
              </AntTabs>
            </AppBar>

            {tabItems.map((item, _index) => (
              <TabPanel key={_index} index={item.index} value={item.value}>
                {item.content}
              </TabPanel>
            ))}

            <div className={styles.description}>
              <div className={styles.values}>
                <span>
                  <p>Produtos: (3 itens)</p>
                  <p>R$ 624,80</p>
                </span>
                <span>
                  <p>Frete:</p>
                  <p>R$ 5,30</p>
                </span>
                <span>
                  <p>Desconto:</p>
                  <p className={styles.other_color}>R$ 30,00</p>
                </span>
                <span className={styles.bold}>
                  <p>Subtotal:</p>
                  <p>R$ 600,10</p>
                </span>
              </div>
              <Button
                style={{
                  color: '#fff',
                  padding: '16px 60px',
                  background: `${value === 2 ? '#000000' : '#9222DC'}`,
                  borderRadius: '4px',
                }}
                onClick={handleSubmit}
                form={value === 1 ? 'id-form' : ''}
                type={value === 1 ? 'submit' : 'button'}
                fullWidth
              >
                {value == 0
                  ? 'Seguir para o pagamento'
                  : value == 2
                  ? 'Voltar ao início do protótipo'
                  : 'Finalizar pedido'}
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stepper style={{ padding: '24px' }} activeStep={value}>
              {tabItems.map((item, index) => {
                const stepProps: { completed?: boolean } = {}
                const labelProps: {
                  optional?: React.ReactNode
                } = {}

                return (
                  <Step key={item.index} {...stepProps}>
                    <StepLabel {...labelProps}>{item.label}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                height: '100%',
              }}
            >
              <div style={{ width: '100%' }}>{tabItems[value].content}</div>
              <div className={styles.description}>
                <div className={styles.values}>
                  <span>
                    <p>Produtos: (3 itens)</p>
                    <p>R$ 624,80</p>
                  </span>
                  <span>
                    <p>Frete:</p>
                    <p>R$ 5,30</p>
                  </span>
                  <span>
                    <p>Desconto:</p>
                    <p className={styles.other_color}>R$ 30,00</p>
                  </span>
                  <span className={styles.bold}>
                    <p>Subtotal:</p>
                    <p>R$ 600,10</p>
                  </span>
                </div>
                <Button
                  style={{
                    color: '#fff',
                    padding: '16px 60px',
                    background: `${value === 2 ? '#000000' : '#9222DC'}`,
                    borderRadius: '4px',
                  }}
                  form={value === 1 ? 'id-form' : ''}
                  type={value === 1 ? 'submit' : 'button'}
                  onClick={handleSubmit}
                  fullWidth
                >
                  {value == 0
                    ? 'Seguir para o pagamento'
                    : value == 2
                    ? 'Voltar ao início do protótipo'
                    : 'Finalizar pedido'}
                </Button>
              </div>
            </div>
          </React.Fragment>
        )}
      </Main>
    </React.Fragment>
  )
}
