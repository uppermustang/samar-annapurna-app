import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    icon: '🏔️',
    title: '7000m+ peak views',
    description: 'Wake up to Mt. Nilgiri, Thorang La Himal, and Annapurna from our lodge.',
  },
  {
    icon: '🐴',
    title: 'Horseback riding',
    description: 'Explore Upper Mustang on horseback – a classic way to see the trails and valleys.',
  },
  {
    icon: '🥾',
    title: 'Hiking trails',
    description: 'Trails for every level, from village walks to longer treks toward Lo Manthang and beyond.',
  },
  {
    icon: '🏜️',
    title: 'Mosaic Hills',
    description: 'Striking, colorful hills and rock formations unique to the Mustang landscape.',
  },
  {
    icon: '🦅',
    title: 'Bird watching',
    description: 'Himalayan species and high-altitude birds around the village and streams.',
  },
  {
    icon: '⛰️',
    title: 'Cave exploration',
    description: 'Ancient sky caves and historic sites in Upper Mustang.',
  },
  {
    icon: '💧',
    title: 'Backyard streams & walks',
    description: 'Gentle walks along local streams and quiet paths.',
  },
  {
    icon: '🙏',
    title: 'Monastery visits',
    description: 'Centuries-old monasteries and Buddhist culture nearby.',
  },
  {
    icon: '🎭',
    title: 'Local culture',
    description: 'Tibetan-Nepali traditions, festivals, and daily life in Samar village.',
  },
  {
    icon: '✨',
    title: 'Stargazing',
    description: 'Crystal-clear nights and unforgettable starry skies.',
  },
  {
    icon: '🍲',
    title: 'Local food',
    description: 'Homestyle Tibetan-Nepali meals and warm hospitality.',
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-20 py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-deepblue mb-3">Experiences</h2>
          <p className="text-deepblue/80 max-w-2xl mx-auto">
            From mountain vistas to monastery visits – discover what makes a stay with us special.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {EXPERIENCES.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl bg-beige-light/50 border border-beige-dark/10 p-6 hover:shadow-lg hover:border-terracotta/30 transition-all"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-display font-semibold text-lg text-deepblue mb-2">{item.title}</h3>
              <p className="text-deepblue/80 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
