import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import styles from './finish.module.css'

const Finish: React.FC = () => {
  return (
    <Container
      style={{
        width: ' 100%',
        maxWidth: '100vw',
        padding: '20px 8px',
        background: '#f5f5f5',
      }}
      className={styles.container}
    >
      <Box className={styles.box}>
        <Typography style={{ marginBottom: '15px' }} align='center' variant='h5'>
          Compra efetuada com sucesso
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Typography style={{ marginBottom: '15px' }} align='center' variant='body1'>
            ****.****.****.4545
          </Typography>
          <Typography style={{ marginBottom: '15px' }} align='center' variant='body1'>
            Bruce Wayne
          </Typography>
          <Typography style={{ marginBottom: '15px' }} align='center' variant='body1'>
            02/2027
          </Typography>
        </div>
      </Box>
      <Box className={styles.box}>
        <Typography style={{ marginBottom: '15px' }} variant='h5'>
          Produtos
        </Typography>
        <div className={styles.product}>
          <div>
            <img
              src='https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
              alt=''
            />
          </div>
          <p className={styles.text}>
            L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução
          </p>
        </div>
        <div className={styles.product}>
          <div>
            <img
              src='https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
              alt=''
            />
          </div>
          <p className={styles.text}>
            Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml
          </p>
        </div>
        <div className={styles.product}>
          <div>
            <img
              src='https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
              alt=''
            />
          </div>
          <p className={styles.text}>Senscience Inner Restore Intensif - Máscara Capilar 50ml</p>
        </div>
      </Box>
    </Container>
  )
}

export default Finish
