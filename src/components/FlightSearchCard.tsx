import iconSwap from '../assets/icons/icon-swap.svg'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'
import iconAdd from '../assets/icons/icon-add.svg'
import iconPaperPlane from '../assets/icons/icon-paper-plane.svg'
import { Link } from 'react-router-dom'

type Field = {
  label: string
  value: string
  trailingIcon?: string
}

const fields: Field[] = [
  { label: 'From - To', value: 'Lahore - Karachi', trailingIcon: iconSwap },
  { label: 'Trip', value: 'Return', trailingIcon: iconChevronDown },
  { label: 'Depart- Return', value: '07 Nov 22 - 13 Nov 22' },
  { label: 'Passenger - Class', value: '1 Passenger, Economy' },
]

export default function FlightSearchCard() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-[0_4px_60px_rgba(0,0,0,0.08)] sm:p-10">
      <h2 className="mb-6 text-xl font-semibold text-ink">Where are you flying?</h2>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {fields.map((field) => (
          <label
            key={field.label}
            className="relative flex h-14 items-center rounded border border-black/30 px-4"
          >
            <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
              {field.label}
            </span>
            <input
              defaultValue={field.value}
              className="w-full bg-transparent text-base text-ink-soft outline-none"
            />
            {field.trailingIcon && (
              <img src={field.trailingIcon} alt="" className="h-6 w-6 shrink-0" />
            )}
          </label>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4">
        <button
          type="button"
          className="flex items-center gap-2 rounded px-4 py-3.5 text-sm font-medium text-ink"
        >
          <img src={iconAdd} alt="" className="h-4 w-4" />
          Add Promo Code
        </button>
        <Link
          to="/flights"
          className="flex items-center gap-2 rounded bg-mint px-6 py-3.5 text-sm font-medium text-ink"
        >
          <img src={iconPaperPlane} alt="" className="h-4 w-4" />
          Show Flights
        </Link>
      </div>
    </div>
  )
}
