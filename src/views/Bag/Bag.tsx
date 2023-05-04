import React from 'react'
import { Container, Box } from '@mui/material'
import styles from './bag.module.css'

const BagTab: React.FC = () => {
  return (
    <Container style={{
      width: '100%',
      maxWidth: '100vw',
      padding: '20px 8px',
      background: '#f5f5f5',
    }} className={styles.container}>
      <Box className={styles.box}>
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
          <span>
            <p>R$ 243,90</p>
            <p>R$ 225,90</p>
          </span>
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
          <span>
            <p></p>
            <p>R$ 299,00</p>
          </span>
        </div>
        <div className={styles.product}>
          <div>
            <img
              src='https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
              alt=''
            />
          </div>
          <p className={styles.text}>Senscience Inner Restore Intensif - Máscara Capilar 50ml</p>
          <span>
            <p></p>
            <p>R$ 99,90</p>
          </span>
        </div>
      </Box>
    </Container>
  )
}

export default BagTab