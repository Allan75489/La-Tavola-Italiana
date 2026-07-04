import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../../components/Button/Button'
import { createReservation } from '../../services/menuService'
import styles from './Reservations.module.css'

const INITIAL_FORM = {
  name: '', phone: '', email: '', date: '', time: '', guests: 2, notes: ''
}

export default function Reservations() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Informe seu nome completo.'
    if (!/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(form.phone.trim())) {
      errs.phone = 'Informe um telefone válido, ex: (11) 99999-9999.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Informe um e-mail válido.'
    }
    if (!form.date) errs.date = 'Selecione a data da reserva.'
    else if (new Date(form.date) < new Date(new Date().toDateString())) {
      errs.date = 'A data deve ser hoje ou uma data futura.'
    }
    if (!form.time) errs.time = 'Selecione o horário.'
    if (!form.guests || Number(form.guests) < 1) errs.guests = 'Informe ao menos 1 pessoa.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    try {
      await createReservation(form)
      setSubmitted(true)
      setForm(INITIAL_FORM)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Reserve sua Mesa</h1>
          <p>Prenota il tuo tavolo e viva um jantar inesquecível.</p>
        </div>
      </section>

      <section className={styles.wrap}>
        <div className="container">
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className={styles.success}>
                <h3>Reserva enviada com sucesso! 🎉</h3>
                <p>Em breve nossa equipe entrará em contato para confirmar sua mesa.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Fazer nova reserva
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="name">Nome</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefone</label>
                    <input id="phone" name="phone" placeholder="(11) 99999-9999" value={form.phone} onChange={handleChange} />
                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="date">Data</label>
                    <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                    {errors.date && <span className={styles.error}>{errors.date}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="time">Horário</label>
                    <input id="time" name="time" type="time" value={form.time} onChange={handleChange} />
                    {errors.time && <span className={styles.error}>{errors.time}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="guests">Quantidade de Pessoas</label>
                  <input id="guests" name="guests" type="number" min="1" max="20" value={form.guests} onChange={handleChange} />
                  {errors.guests && <span className={styles.error}>{errors.guests}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="notes">Observações</label>
                  <textarea id="notes" name="notes" placeholder="Alergias, ocasião especial, preferência de mesa..." value={form.notes} onChange={handleChange} />
                </div>

                <Button type="submit" variant="primary" full disabled={loading}>
                  {loading ? 'Enviando...' : 'Reservar Mesa'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
