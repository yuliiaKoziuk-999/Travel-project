import { Link } from 'react-router-dom'
import iconHeart from '../assets/icons/icon-heart.svg'
import iconStar from '../assets/icons/icon-star.svg'

export type Hotel = {
  id: string
  image: string
  name: string
  location: string
  rating: string
  ratingLabel: string
  price: string
  amenities: string[]
}

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 sm:flex-row sm:p-6">
      <img
        src={hotel.image}
        alt=""
        className="h-[111px] w-full shrink-0 rounded-lg object-cover sm:w-40"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-base font-semibold text-ink">{hotel.name}</p>
            <p className="text-sm text-ink">{hotel.location}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-ink">per night from</p>
            <p className="text-2xl font-bold text-[#FF8682]">{hotel.price}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="flex h-8 w-10 items-center justify-center rounded border border-mint text-xs font-medium text-ink">
            {hotel.rating}
          </span>
          <span className="text-xs font-medium text-ink">{hotel.ratingLabel}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {hotel.amenities.map((amenity) => (
            <span
              key={amenity}
              className="flex items-center gap-1 rounded-full border border-mint px-3 py-1 text-xs font-medium text-ink"
            >
              <img src={iconStar} alt="" className="h-3 w-3" />
              {amenity}
            </span>
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
            to={`/hotels/${hotel.id}`}
            className="flex flex-1 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
          >
            View Deal
          </Link>
        </div>
      </div>
    </div>
  )
}
