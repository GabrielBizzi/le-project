import React from 'react'
import styles from './main.module.css'
import { IMainProps } from './Main.entity'

const Main: React.FC<IMainProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Main
