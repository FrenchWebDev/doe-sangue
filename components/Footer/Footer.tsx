import { NextPage } from 'next'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.textos}>
          <h4>
            &copy; | Todos os direitos reservados.
          </h4>
          <a href="https://lucassites.com.br" target="_blank">
            Desenvolvido por <span>LucasSites</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }