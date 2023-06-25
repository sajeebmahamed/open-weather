import React from 'react'
import styles from './layout.module.css'

type Props = {
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
};

const Layout = ({ children }: Props) => {
  const [header, form, result] = children as [React.ReactNode, React.ReactNode, React.ReactNode]
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {header}
        </div>
        <div className={styles.content}>
            <div className={styles.form}>
                {form}
            </div>
            <div className={styles.result}>
                {result}
            </div>
        </div>

        {/* <div className={styles.footer}>
            <h1>Footer</h1>
        </div> */}
    </div> 
  )
}

export default Layout