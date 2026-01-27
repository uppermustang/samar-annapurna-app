import { motion } from 'framer-motion'

const ROOMS = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'Cozy double or twin beds, traditional decor, warm interiors. Perfect for solo travellers or couples.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
    priceNote: 'Based on contact through reservation or phone',
    views: 'Garden / courtyard',
  },
  {
    id: 2,
    name: 'Mountain View Deluxe',
    description: 'Spacious room with direct views of Nilgiri and Annapurna massif. Private seating area.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89c6d9cba22?w=600&q=80',
    priceNote: 'Based on contact through reservation or phone',
    views: '7000m+ peaks',
  },
  {
    id: 3,
    name: 'Family Suite',
    description: 'Two interconnected rooms, ideal for families. Traditional Tibetan-Nepali touches.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    priceNote: 'Based on contact through reservation or phone',
    views: 'Mountain & courtyard',
  },
  {
    id: 4,
    name: 'Twin Cozy',
    description: 'Two single beds, warm lighting, wooden furniture. Great for friends or small groups.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80',
    priceNote: 'Based on contact through reservation or phone',
    views: 'Stream / garden',
  },
  {
    id: 5,
    name: 'Superior Double',
    description: 'Larger double room with extra seating, traditional rugs, and mountain glimpses.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
    priceNote: 'Based on contact through reservation or phone',
    views: 'Partial mountain',
  },
  {
    id: 6,
    name: 'Heritage Room',
    description: 'Character room with local crafts, exposed beams, and a sense of old Mustang.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
    priceNote: 'Based on contact through reservation or phone',
    views: 'Backyard streams',
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="scroll-mt-20 py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-deepblue mb-3">Rooms</h2>
          <p className="text-deepblue/80 max-w-2xl mx-auto">
            Cozy accommodations across four traditional buildings. All rooms feature warm decor,
            clean linens, and a touch of Himalayan hospitality.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room, i) => (
            <motion.article
              key={room.id}
              className="rounded-2xl overflow-hidden bg-beige-light/40 shadow-md hover:shadow-xl transition-shadow border border-beige-dark/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-xl text-deepblue mb-2">{room.name}</h3>
                <p className="text-deepblue/85 text-sm leading-relaxed mb-3">{room.description}</p>
                <p className="text-saffron-dark/90 text-xs mb-2">View: {room.views}</p>
                <p className="text-deepblue/70 text-xs italic">Price: {room.priceNote}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
