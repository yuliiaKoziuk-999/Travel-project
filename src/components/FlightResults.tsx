import iconMenu from '../assets/icons/icon-menu.svg'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'
import FlightCard, { type Flight } from './FlightCard'
import card1 from '../assets/img/flight-card-1.png'
import card2 from '../assets/img/flight-card-2.png'
import card3 from '../assets/img/flight-card-3.png'
import card4 from '../assets/img/flight-card-4.png'

const sortTabs = [
  { label: 'Cheapest', price: '$99', duration: '2h 18m' },
  { label: 'Best', price: '$99', duration: '2h 18m' },
  { label: 'Quickest', price: '$99', duration: '2h 18m' },
]

const segment = {
  departure: '12:00 pm',
  arrival: '01:28 pm',
  airline: 'Emirates',
  duration: '2h 28m',
  route: 'EWR-BNA',
}

const flights: Flight[] = [card1, card2, card3, card4].map((image, i) => ({
  id: String(i + 1),
  image,
  rating: '4.2',
  ratingLabel: 'Very Good 54 reviews',
  price: '$104',
  segments: [segment, segment],
}))

export default function FlightResults() {
  return (
    <div className="flex-1">
      <div className="rounded-xl bg-white px-6 pt-5">
        <div className="flex flex-wrap items-stretch">
          {sortTabs.map((tab, i) => (
            <div
              key={tab.label}
              className={`flex flex-col gap-1 px-6 py-2 ${
                i === 1 ? 'border-b-4 border-mint' : 'border-b border-transparent'
              } ${i > 0 ? 'border-l border-l-[#D7E2EE]' : ''}`}
            >
              <p className="text-base font-semibold text-ink">{tab.label}</p>
              <p className="text-sm text-ink">
                {tab.price}
                <span className="mx-0.5">.</span>
                {tab.duration}
              </p>
            </div>
          ))}
          <div className="flex items-center gap-2 border-l border-l-[#D7E2EE] px-6 py-2">
            <img src={iconMenu} alt="" className="h-6 w-6" />
            <span className="text-sm font-medium text-ink">Other sort</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-ink">Showing 4 of 257 places</p>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-ink">Sort by Recommended</span>
          <img src={iconChevronDown} alt="" className="h-[18px] w-[18px]" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {flights.map((flight, i) => (
          <FlightCard key={i} flight={flight} />
        ))}
      </div>

      <button
        type="button"
        className="mt-8 w-full rounded bg-ink py-3.5 text-sm font-semibold text-white"
      >
        Show more results
      </button>
    </div>
  )
}
