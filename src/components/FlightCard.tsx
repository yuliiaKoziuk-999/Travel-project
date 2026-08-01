import { Link } from 'react-router-dom'
import iconCheckbox from '../assets/icons/icon-checkbox.svg'
import iconHeart from '../assets/icons/icon-heart.svg'

export type Segment = {
  departure: string
  arrival: string
  airline: string
  duration: string
  route: string
}

export type Flight = {
  id: string
  image: string
  rating: string
  ratingLabel: string
  price: string
  segments: Segment[]
}

export default function FlightCard({ flight }: { flight: Flight }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 sm:flex-row sm:p-6">
      <img
        src={flight.image}
        alt=""
        className="h-[111px] w-full shrink-0 rounded-lg object-cover sm:w-40"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-10 items-center justify-center rounded border border-mint text-xs font-medium text-ink">
              {flight.rating}
            </span>
            <span className="text-xs font-medium text-ink">{flight.ratingLabel}</span>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-ink">starting from</p>
            <p className="text-2xl font-bold text-[#FF8682]">{flight.price}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {flight.segments.map((seg, i) => (
            <div key={i} className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <img src={iconCheckbox} alt="" className="h-6 w-6 shrink-0" />
                <div>
                  <p className="text-base font-semibold text-ink">
                    {seg.departure} - {seg.arrival}
                  </p>
                  <p className="text-sm text-ink">{seg.airline}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-ink">non stop</p>
              <div>
                <p className="text-base font-semibold text-ink">{seg.duration}</p>
                <p className="text-sm text-ink">{seg.route}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3 border-t border-ink pt-4">
          <button
            type="button"
            aria-label="Save to favourites"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-mint"
          >
            <img src={iconHeart} alt="" className="h-5 w-5" />
          </button>
          <Link
            to={`/flights/${flight.id}`}
            className="flex flex-1 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
          >
            View Deals
          </Link>
        </div>
      </div>
    </div>
  )
}
