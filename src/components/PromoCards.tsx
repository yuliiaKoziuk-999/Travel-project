import { Link } from 'react-router-dom'
import Container from './Container'
import iconPaperPlane from '../assets/icons/icon-paper-plane.svg'
import flightsImg from '../assets/img/promo-flights.jpg'
import hotelsImg from '../assets/img/promo-hotels.jpg'

const cards = [
  {
    title: 'Flights',
    text: 'Search Flights & Places Hire to our most popular destinations',
    cta: 'Show Flights',
    img: flightsImg,
    to: '/flights',
  },
  {
    title: 'Hotels',
    text: 'Search hotels & Places Hire to our most popular destinations',
    cta: 'Show Hotels',
    img: hotelsImg,
    to: '/hotels',
  },
]

export default function PromoCards() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative flex h-[420px] items-end overflow-hidden rounded-[20px] bg-cover bg-center sm:h-[559px]"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/75 to-transparent" />
              <div className="relative w-full max-w-sm px-8 pb-16 sm:px-12">
                <h3 className="font-display text-3xl font-bold text-white sm:text-[40px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-base text-white">{card.text}</p>
                <Link
                  to={card.to}
                  className="mt-6 flex w-fit items-center gap-2 rounded bg-mint px-6 py-3.5 text-sm font-medium text-ink"
                >
                  <img src={iconPaperPlane} alt="" className="h-4 w-4" />
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
