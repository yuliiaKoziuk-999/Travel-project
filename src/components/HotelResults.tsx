import iconMenu from '../assets/icons/icon-menu.svg'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'
import HotelCard, { type Hotel } from './HotelCard'
import destinationParis from '../assets/img/destination-paris.jpg'
import destinationTokyo from '../assets/img/destination-tokyo.jpg'
import destinationDubai from '../assets/img/destination-dubai.jpg'
import destinationNewyork from '../assets/img/destination-newyork.jpg'

const sortTabs = [
  { label: 'Cheapest', price: '$45', meta: '4.0 rating' },
  { label: 'Best', price: '$89', meta: '4.6 rating' },
  { label: 'Top Rated', price: '$120', meta: '4.9 rating' },
]

const hotels: Hotel[] = [
  {
    id: '1',
    image: destinationParis,
    name: 'Hôtel Lumière',
    location: 'Paris, France',
    rating: '4.6',
    ratingLabel: 'Excellent 312 reviews',
    price: '$89',
    amenities: ['Free Wifi', 'Breakfast Included', 'Pool'],
  },
  {
    id: '2',
    image: destinationTokyo,
    name: 'Shibuya Sky Hotel',
    location: 'Tokyo, Japan',
    rating: '4.4',
    ratingLabel: 'Very Good 198 reviews',
    price: '$104',
    amenities: ['Free Wifi', 'Gym', 'Parking'],
  },
  {
    id: '3',
    image: destinationDubai,
    name: 'Marina Bay Suites',
    location: 'Dubai, UAE',
    rating: '4.8',
    ratingLabel: 'Excellent 421 reviews',
    price: '$156',
    amenities: ['Free Wifi', 'Pool', 'Spa'],
  },
  {
    id: '4',
    image: destinationNewyork,
    name: 'Manhattan Central',
    location: 'New York, USA',
    rating: '4.2',
    ratingLabel: 'Very Good 267 reviews',
    price: '$132',
    amenities: ['Free Wifi', 'Breakfast Included', 'Gym'],
  },
]

export default function HotelResults() {
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
                {tab.meta}
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
        <p className="text-sm font-semibold text-ink">Showing 4 of 189 hotels</p>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-ink">Sort by Recommended</span>
          <img src={iconChevronDown} alt="" className="h-[18px] w-[18px]" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {hotels.map((hotel, i) => (
          <HotelCard key={i} hotel={hotel} />
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
