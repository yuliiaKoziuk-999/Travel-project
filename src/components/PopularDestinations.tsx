import Container from './Container'
import istanbul from '../assets/img/destination-istanbul.jpg'
import sydney from '../assets/img/destination-sydney.jpg'
import baku from '../assets/img/destination-baku.jpg'
import male from '../assets/img/destination-male.jpg'
import paris from '../assets/img/destination-paris.jpg'
import newyork from '../assets/img/destination-newyork.jpg'
import london from '../assets/img/destination-london.jpg'
import tokyo from '../assets/img/destination-tokyo.jpg'
import dubai from '../assets/img/destination-dubai.jpg'

const destinations = [
  { city: 'Istanbul, Turkey', img: istanbul },
  { city: 'Sydney, Australia', img: sydney },
  { city: 'Baku, Azerbaijan', img: baku },
  { city: 'Malé, Maldives', img: male },
  { city: 'Paris, France', img: paris },
  { city: 'New York, US', img: newyork },
  { city: 'London, UK', img: london },
  { city: 'Tokyo, Japan', img: tokyo },
  { city: 'Dubai, UAE', img: dubai },
]

export default function PopularDestinations() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-[32px]">Plan your perfect trip</h2>
            <p className="mt-2 text-ink">
              Search Flights &amp; Places Hire to our most popular destinations
            </p>
          </div>
          <button
            type="button"
            className="rounded px-4 py-2.5 text-sm font-medium text-ink"
          >
            See more places
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.city} className="flex items-center gap-4 rounded-2xl bg-white p-4">
              <img
                src={d.img}
                alt={d.city}
                className="h-[90px] w-[90px] shrink-0 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-base font-semibold">{d.city}</h3>
                <p className="mt-1 text-sm font-medium">
                  Flights <span className="mx-1">•</span> Hotels <span className="mx-1">•</span> Resorts
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
