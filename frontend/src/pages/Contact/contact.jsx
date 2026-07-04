import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Contato</h1>
          <p>Siamo qui per voi — fale conosco.</p>
        </div>
      </section>

      <section className="container">
        <div className={styles.wrap}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <h4>Endereço</h4>
                <p>Via Roma, 245 — Jardim Itália, São Paulo, SP</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <h4>Telefone</h4>
                <p>(11) 4002-8922</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>💬</span>
              <div>
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">(11) 99999-9999</a></p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📷</span>
              <div>
                <h4>Redes Sociais</h4>
                <p>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                  {' · '}
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                </p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>Terça a Domingo — 12h às 15h e 19h às 23h30</p>
                <p>Segunda-feira: fechado</p>
              </div>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              title="Localização da Trattoria della Famiglia"
              src="https://www.google.com/maps?q=São+Paulo,SP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
