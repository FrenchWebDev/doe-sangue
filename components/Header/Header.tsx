import { NextPage } from 'next'
import styles from './Header.module.scss'
import Image from 'next/image'

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} data-aos="fade-down">
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.brand}>
              <button>
                <Image src="/logo.png" alt="Logo" width="140px" height="187px" />
              </button>
            </div>
            <div className={styles.info}>
              <h4>
                #PARTIUDOAR<span>SANGUE</span>
              </h4>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.hero}>
        <div className={styles.flex}>
          <div className={styles.textos}>
            <h4 data-aos="fade-down" data-aos-delay="200">
              Doe <span>sangue</span>.
            </h4>
            <h4 data-aos="fade-down" data-aos-delay="400">
              Doe <span>vida</span>.
            </h4>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }