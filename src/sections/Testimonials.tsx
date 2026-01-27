import { motion } from 'framer-motion'

function StarRating({ stars = 5 }: { stars?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: stars }, (_, i) => (
        <svg key={i} className="w-5 h-5 text-saffron" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

const REVIEWS = [
  {
    stars: 5,
    quote: 'The rooms are clean and the food is delicious.',
    author: 'カーンオリバー',
    badge: 'Local Guide · 212 reviews · 569 photos',
  },
  {
    stars: 5,
    quote:
      'Lovely hotel on the way to Lo Manthang. Spacious clean rooms, friendly service and good meals. Don\'t forget to take a stroll through the village.',
    author: 'Arjanne Rietsema',
    badge: 'Local Guide · 20 reviews · 17 photos',
  },
  {
    stars: 5,
    quote:
      'Beautiful guest house with comfortable beds and very clean. Stunning views and a lovely friendly staff. The handmade wooden furniture in the rooms was gorgeous.',
    author: 'Karen Came',
    badge: 'Google reviews',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-16 sm:py-24 bg-beige-light/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-deepblue mb-3">
            Best from Google Reviews
          </h2>
          <p className="text-deepblue/80 max-w-2xl mx-auto">
            What guests say about their stay at Samar Annapurna Hotel.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review, i) => (
            <motion.article
              key={review.author}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-beige-dark/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <StarRating stars={review.stars} />
              <blockquote className="mt-4 text-deepblue/90 leading-relaxed">
                "{review.quote}"
              </blockquote>
              <footer className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-deepblue">{review.author}</span>
                <span className="text-deepblue/50">·</span>
                <span className="text-deepblue/60">{review.badge}</span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
