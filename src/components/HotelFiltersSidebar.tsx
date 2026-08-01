import type { PropsWithChildren } from 'react'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'
import iconCheckbox from '../assets/icons/icon-checkbox.svg'

function FilterSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="border-b border-ink py-6 first:pt-0 last:border-b-0">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <img src={iconChevronDown} alt="" className="h-6 w-6" />
      </div>
      <div className="mt-5">{children}</div>
    </div>
  )
}

function RangeRow({ min, max }: { min: string; max: string }) {
  return (
    <div>
      <div className="relative h-1 rounded-full bg-ink/80">
        <span className="absolute -left-0.5 -top-2.5 h-6 w-6 rounded-full bg-mint" />
        <span className="absolute -right-0.5 -top-2.5 h-6 w-6 rounded-full bg-mint" />
      </div>
      <div className="mt-4 flex justify-between text-xs font-medium text-ink">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

const starRatings = ['1+', '2+', '3+', '4+', '5']
const propertyTypes = ['Hotel', 'Resort', 'Apartment', 'Villa']
const amenities = ['Free Wifi', 'Breakfast Included', 'Pool', 'Parking', 'Gym', 'Spa']

export default function HotelFiltersSidebar() {
  return (
    <aside className="w-full lg:w-[343px] lg:shrink-0">
      <h2 className="mb-6 text-xl font-semibold text-ink">Filters</h2>

      <FilterSection title="Price per night">
        <RangeRow min="$20" max="$500" />
      </FilterSection>

      <FilterSection title="Star Rating">
        <div className="flex gap-3">
          {starRatings.map((r) => (
            <button
              key={r}
              type="button"
              className="rounded border border-mint px-3 py-2 text-xs font-medium text-ink"
            >
              {r}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Property Type">
        <ul className="flex flex-col gap-4">
          {propertyTypes.map((t) => (
            <li key={t} className="flex items-center gap-3">
              <img src={iconCheckbox} alt="" className="h-6 w-6" />
              <span className="text-sm font-medium text-ink">{t}</span>
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Amenities">
        <ul className="flex flex-col gap-4">
          {amenities.map((a) => (
            <li key={a} className="flex items-center gap-3">
              <img src={iconCheckbox} alt="" className="h-6 w-6" />
              <span className="text-sm font-medium text-ink">{a}</span>
            </li>
          ))}
        </ul>
      </FilterSection>
    </aside>
  )
}
