import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle/sectiontitle'
import styles from './About.module.css'

const TIMELINE = [
  { year: '1954', title: 'A partida de Firenze', text: 'Nonno Alessandro Bellini deixa a Toscana rumo ao Brasil, levando consigo apenas um caderno de receitas de família.' },
  { year: '1978', title: 'A primeira trattoria', text: 'Com as economias de uma vida, Alessandro e sua esposa Lucia abrem as portas do pequeno restaurante que daria origem à Trattoria della Famiglia.' },
  { year: '1996', title: 'A segunda geração', text: 'Marco Bellini assume a cozinha após formação na Itália, atualizando técnicas sem abandonar as receitas originais do pai.' },
  { year: '2015', title: 'Reforma e expansão', text: 'A casa ganha novo salão, adega climatizada e forno a lenha trazido diretamente de Nápoles.' },
  { year: 'Hoje', title: 'Terceira geração à mesa', text: 'A neta Giulia Bellini lidera a casa, unindo tradição familiar e uma experiência gastronômica contemporânea.' }
]

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Nossa História</h1>
          <p>Quattro generazioni, una sola passione.</p>
        </div>
      </section>

      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000"
              alt="Família Bellini à mesa"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">La Famiglia Bellini</span>
              <h2>Uma receita que atravessou o oceano</h2>
              <p>
                Em 1954, o jovem Alessandro Bellini deixou a Toscana com uma mala, um caderno de
                receitas manuscritas por sua mãe e a certeza de que a boa mesa era a forma mais
                sincera de amor que sua família conhecia.
              </p>
              <p>
                Vinte e quatro anos depois, ao lado de Lucia, abriu as portas de um pequeno
                salão com quatro mesas. Não vendiam apenas comida: serviam memória, pertencimento
                e o calor de uma cozinha que jamais deixou de ser italiana no coração.
              </p>
              <p>
                Hoje, sob o comando de Giulia Bellini, a terceira geração da família, a Trattoria
                della Famiglia mantém viva a mesma promessa feita há setenta anos: cada prato que
                sai da nossa cozinha carrega a história de quem veio antes de nós.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className="container">
          <SectionTitle eyebrow="Il Nostro Cammino" title="Linha do Tempo" />
          <div className={styles.timelineList}>
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className={styles.year}>{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <SectionTitle
            eyebrow="Missão & Valores"
            title="O que nos move todos os dias"
            subtitle="La cucina è un atto d'amore — e cada valor abaixo nasce dessa convicção."
          />
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Tradição</h3>
              <p>Preservar receitas de família exatamente como foram concebidas há gerações.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Qualidade</h3>
              <p>Ingredientes importados e frescos, selecionados com o mesmo rigor de sempre.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Acolhimento</h3>
              <p>Cada pessoa que se senta à nossa mesa é recebida como parte da famiglia.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
