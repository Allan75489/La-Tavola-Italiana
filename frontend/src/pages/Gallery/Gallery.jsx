import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import galleryData from '../../data/gallery.json'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Galeria</h1>
          <p>Momenti della nostra casa — a atmosfera que só a Trattoria oferece.</p>
        </div>
      </section>

      <section className={styles.wrap}>
        <div className="container">
          <div className={styles.masonry}>
            {galleryData.map((photo) => (
              <div
                key={photo.id}
                className={styles.item}
                onClick={() => setActive(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActive(photo)}
              >
                <img src={photo.image} alt={photo.caption} loading="lazy" />
                <span className={styles.caption}>{photo.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className={styles.closeBtn} onClick={() => setActive(null)} aria-label="Fechar">✕</button>
            <motion.img
              src={active.image}
              alt={active.caption}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <span className={styles.lightboxCaption}>{active.caption}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
