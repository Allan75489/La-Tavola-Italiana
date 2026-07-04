const LABELS = {
  gluten: { icon: '🌾', label: 'Glúten' },
  lactose: { icon: '🥛', label: 'Lactose' },
  ovo: { icon: '🥚', label: 'Ovo' },
  'frutos do mar': { icon: '🦐', label: 'Frutos do Mar' },
  amendoim: { icon: '🥜', label: 'Amendoim' },
  sulfitos: { icon: '🍇', label: 'Sulfitos' }
}

export default function AllergenIcons({ allergens = [] }) {
  if (!allergens.length) return null
  return (
    <ul style={{ display: 'flex', gap: '0.4rem', listStyle: 'none', flexWrap: 'wrap' }}>
      {allergens.map((a) => (
        <li
          key={a}
          title={LABELS[a]?.label || a}
          style={{ fontSize: '0.95rem' }}
          aria-label={LABELS[a]?.label || a}
        >
          {LABELS[a]?.icon || '⚠️'}
        </li>
      ))}
    </ul>
  )
}
