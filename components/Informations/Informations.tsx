import { NextPage } from 'next'
import styles from './Informations.module.scss'

const Informations: NextPage = () => {
  return (
    <section className={styles.informations}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.item}>
            <h4 data-aos="fade-down">
              Porque doar <span>sangue</span>?
            </h4>
            <p data-aos="fade-down">
              A doação de sangue é um ato voluntário que pode ajudar pessoas que necessitam de transfusão. A doação de sangue é um ato voluntário que pode ajudar a salvar muitas vidas. Em cada doação, uma pessoa doa, no máximo, 450 ml de sangue e essa única doação pode salvar a vida de até quatro pessoas.
            </p>
          </div>
          <div className={styles.item}>
            <h4 data-aos="fade-down">
              Quem pode doar <span>sangue</span>?
            </h4>
            <p data-aos="fade-down">
              A doação de sangue é um ato voluntário que pode ajudar pessoas que necessitam de transfusão. A doação de sangue é um ato voluntário que pode ajudar a salvar muitas vidas. Em cada doação, uma pessoa doa, no máximo, 450 ml de sangue e essa única doação pode salvar a vida de até quatro pessoas.
            </p>
          </div>
          <div className={styles.item}>
            <h4 data-aos="fade-down">
              Onde meu <span>sangue</span> será usado?
            </h4>
            <p data-aos="fade-down">
              A doação de sangue é um ato voluntário que pode ajudar pessoas que necessitam de transfusão. A doação de sangue é um ato voluntário que pode ajudar a salvar muitas vidas. Em cada doação, uma pessoa doa, no máximo, 450 ml de sangue e essa única doação pode salvar a vida de até quatro pessoas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Informations }