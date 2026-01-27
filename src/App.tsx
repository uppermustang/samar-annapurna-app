import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Testimonials } from './sections/Testimonials'
import { Rooms } from './sections/Rooms'
import { Gallery } from './sections/Gallery'
import { Experiences } from './sections/Experiences'
import { LocationMap } from './sections/LocationMap'
import { ReservationForm } from './sections/ReservationForm'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Rooms />
      <Gallery />
      <Experiences />
      <LocationMap />
      <ReservationForm />
    </>
  )
}

export default function App() {
  return (
    <Layout>
      <Helmet>
        <title>Samar Annapurna Hotel | Family-Run Lodge in Mustang, Nepal</title>
        <meta
          name="description"
          content="Samar Annapurna Hotel (Annapurna Guest House, Samar) – Family-run Himalayan lodge in Mustang, Nepal. Cozy rooms, Tibetan-Nepali hospitality, epic mountain views. Reserve now."
        />
        <meta name="og:title" content="Samar Annapurna Hotel | Family-Run Lodge in Mustang, Nepal" />
        <meta name="og:description" content="Family-run Himalayan lodge in Mustang. Cozy rooms, backyard streams, 7000m+ peak views. Authentic hospitality." />
        <link rel="canonical" href="https://samarannapurnahotel.com/" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}
