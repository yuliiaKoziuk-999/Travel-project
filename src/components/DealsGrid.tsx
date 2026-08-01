import Container from './Container'
import melbourne from '../assets/img/deal-melbourne.jpg'
import paris from '../assets/img/deal-paris.jpg'
import london from '../assets/img/deal-london.jpg'
import columbia from '../assets/img/deal-columbia.jpg'

const deals = [
  { city: 'Melbourne', tagline: 'An amazing journey', price: '$ 700', img: melbourne },
  { city: 'Paris', tagline: 'A Paris Adventure', price: '$ 600', img: paris },
  { city: 'London', tagline: 'London eye adventure', price: '$ 350', img: london },
  { city: 'Columbia', tagline: 'Amazing streets', price: '$ 700', img: columbia },
]

export default function DealsGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-[32px]">Fall into travel</h2>
            <p className="mt-2 text-ink">
              Going somewhere to celebrate this season? Whether you're going home or somewhere to
              roam, we've got the travel tools to get you to your destination.
            </p>
          </div>
          <button type="button" className="rounded px-4 py-2.5 text-sm font-medium text-ink">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal) => (
            <div key={deal.city} className="overflow-hidden rounded-2xl bg-white">
              <img src={deal.img} alt={deal.city} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-ink">{deal.city}</h3>
                <p className="mt-1 text-sm text-ink">{deal.tagline}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-semibold text-ink">{deal.price}</p>
                  <button type="button" className="text-sm font-medium text-ink underline">
                    Book Flight
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
