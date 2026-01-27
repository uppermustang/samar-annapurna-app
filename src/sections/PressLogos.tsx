import { motion } from 'framer-motion'

const LOGOS = [
  { name: 'Condé Nast Traveler', slug: 'conde-nast-traveler' },
  { name: 'Travel + Leisure', slug: 'travel-leisure' },
  { name: 'Forbes', slug: 'forbes' },
]

export function PressLogos() {
  return (
    <section aria-label="As featured in" className="py-8 sm:py-12 bg-deepblue/5 border-b border-beige-dark/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.p
          className="text-center text-deepblue/60 text-sm font-medium tracking-widest uppercase mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          As featured in
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {LOGOS.map((logo) => (
            <span
              key={logo.slug}
              className="font-display font-semibold text-xl sm:text-2xl text-deepblue/50 grayscale hover:grayscale-0 hover:text-deepblue/80 transition-all duration-300"
            >
              {logo.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
