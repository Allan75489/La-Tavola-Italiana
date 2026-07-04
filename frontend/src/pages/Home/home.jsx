import { motion } from 'framer-motion'
import Button from '../../components/Button/Button'
import SectionTitle from '../../components/SectionTitle/sectiontitle'
import styles from './Home.module.css'

const FEATURES = [
  { icon: '🌿', title: 'Ingredientes Importados', text: 'Selecionamos azeites, queijos e vinhos diretamente de produtores italianos.' },
  { icon: '📜', title: 'Receitas Tradicionais', text: 'Pratos preparados a partir de receitas de família, transmitidas por gerações.' },
  { icon: '👨‍🍳', title: 'Chef Especializado', text: 'Formação na Itália e décadas de dedicação à autêntica cucina italiana.' },
  { icon: '🍷', title: 'Ambiente Familiar', text: 'Um espaço acolhedor pensado para reunir pessoas em torno da boa mesa.' }
]

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.heroEyebrow}>Cucina Italiana Autentica</span>
          <h1 className={styles.heroTitle}>Benvenuti alla nostra tavola</h1>
          <p className={styles.heroSubtitle}>
            A verdadeira tradição italiana servida com paixão.
          </p>
          <div className={styles.heroActions}>
            <Button to="/reservas" variant="primary">Reservar Mesa</Button>
            <Button to="/cardapio" variant="secondary">Ver Cardápio</Button>
          </div>
        </motion.div>
        <motion.span
          className={styles.scrollHint}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Deslize ↓
        </motion.span>
      </section>

      <section className={styles.why}>
        <div className="container">
          <SectionTitle
            eyebrow="La Nostra Promessa"
            title="Por que escolher nosso restaurante?"
            subtitle="Quattro ragioni per amare la nostra tavola come se fosse la vostra famiglia."
          />
          <div className={styles.cardsGrid}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.signature}>
        <div className="container">
          <motion.div
            className={styles.signatureImg}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000"
              alt="Bistecca alla Fiorentina grelhada"
            />
          </motion.div>
          <motion.div
            className={styles.signatureText}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Il Nostro Piatto Simbolo</span>
            <h2>Bistecca alla Fiorentina</h2>
            <p>
              Cortada na hora, grelhada na brasa ao ponto exato — um ritual que atravessa
              gerações de famílias toscanas e chega à sua mesa com a mesma reverência de sempre.
            </p>
            <Button to="/cardapio" variant="gold">Explorar Cardápio</Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
