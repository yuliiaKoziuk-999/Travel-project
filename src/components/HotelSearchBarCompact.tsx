import iconSearch from '../assets/icons/icon-search.svg'

type Field = {
  label: string
  value: string
}

const fields: Field[] = [
  { label: 'Where to?', value: 'Paris, France' },
  { label: 'Check In - Check Out', value: '07 Nov 22 - 13 Nov 22' },
  { label: 'Guests - Rooms', value: '2 Guests, 1 Room' },
]

export default function HotelSearchBarCompact() {
  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-end gap-4">
        {fields.map((field) => (
          <label
            key={field.label}
            className="relative flex h-14 flex-1 items-center rounded border border-black/30 px-4 min-w-[220px]"
          >
            <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
              {field.label}
            </span>
            <input
              defaultValue={field.value}
              className="w-full bg-transparent text-base text-ink-soft outline-none"
            />
          </label>
        ))}

        <button
          type="button"
          aria-label="Search"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-mint"
        >
          <img src={iconSearch} alt="" className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
