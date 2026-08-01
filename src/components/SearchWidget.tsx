import { useState } from 'react'
import { Link } from 'react-router-dom'
import iconPlane from '../assets/icons/icon-plane.svg'
import iconBed from '../assets/icons/icon-bed.svg'
import iconSwap from '../assets/icons/icon-swap.svg'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'
import iconAdd from '../assets/icons/icon-add.svg'
import iconPaperPlane from '../assets/icons/icon-paper-plane.svg'

type Field = {
  label: string
  value: string
  trailingIcon?: string
}

const flightFields: Field[] = [
  { label: 'From - To', value: 'Lahore - Karachi', trailingIcon: iconSwap },
  { label: 'Trip', value: 'Return', trailingIcon: iconChevronDown },
  { label: 'Depart - Return', value: '07 Nov 22 - 13 Nov 22' },
  { label: 'Passenger - Class', value: '1 Passenger, Economy' },
]

const stayFields: Field[] = [
  { label: 'Where to?', value: 'Paris, France' },
  { label: 'Check In - Check Out', value: '07 Nov 22 - 13 Nov 22' },
  { label: 'Guests - Rooms', value: '2 Guests, 1 Room' },
]

export default function SearchWidget() {
  const [tab, setTab] = useState<'flights' | 'stays'>('flights')
  const fields = tab === 'flights' ? flightFields : stayFields

  return (
    <div className="rounded-2xl bg-white p-8 shadow-[0_4px_60px_rgba(0,0,0,0.08)] sm:p-10">
      <div className="mb-8 flex items-center gap-8 border-b border-black/10">
        <button
          type="button"
          onClick={() => setTab('flights')}
          className={`flex items-center gap-2 pb-4 text-base font-semibold text-ink ${
            tab === 'flights' ? 'border-b-2 border-ink' : 'opacity-50'
          }`}
        >
          <img src={iconPlane} alt="" className="h-6 w-6" />
          Flights
        </button>
        <button
          type="button"
          onClick={() => setTab('stays')}
          className={`flex items-center gap-2 pb-4 text-base font-semibold text-ink ${
            tab === 'stays' ? 'border-b-2 border-ink' : 'opacity-50'
          }`}
        >
          <img src={iconBed} alt="" className="h-6 w-6" />
          Stays
        </button>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {fields.map((field) => (
          <label
            key={field.label}
            className="relative flex h-14 items-center rounded border border-black/10 px-4"
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
          to={tab === 'flights' ? '/flights' : '/hotels'}
          className="flex items-center gap-2 rounded bg-mint px-6 py-3.5 text-sm font-medium text-ink"
        >
          <img src={tab === 'flights' ? iconPaperPlane : iconBed} alt="" className="h-4 w-4" />
          {tab === 'flights' ? 'Show Flights' : 'Show Hotels'}
        </Link>
      </div>
    </div>
  )
}
