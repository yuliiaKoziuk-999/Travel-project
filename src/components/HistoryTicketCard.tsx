import airlineLogo from '../assets/img/airline-logo-emirates.png'
import iconCalendar from '../assets/icons/icon-calendar.svg'
import iconTimer from '../assets/icons/icon-timer.svg'
import iconDoor from '../assets/icons/icon-door.svg'
import iconSeat from '../assets/icons/icon-seat.svg'
import iconChevronForward from '../assets/icons/icon-chevron-forward.svg'

const infoTiles = [
  { icon: iconCalendar, label: 'Date', value: '12-11-22' },
  { icon: iconDoor, label: 'Gate', value: 'A12' },
  { icon: iconTimer, label: 'Flight time', value: 'Newark(EWR)' },
  { icon: iconSeat, label: 'Seat no.', value: '128' },
]

export default function HistoryTicketCard() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 lg:flex-row lg:items-center">
      <img src={airlineLogo} alt="" className="h-20 w-20 shrink-0 rounded-lg border border-mint/50 object-contain p-2" />

      <div className="flex flex-1 flex-wrap items-center gap-8">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-ink">Newark(EWR)</p>
            <p className="text-xl font-semibold text-ink">12:00 pm</p>
          </div>
          <p className="text-xl font-semibold text-ink">—</p>
          <div>
            <p className="text-sm text-ink">Newark(EWR)</p>
            <p className="text-xl font-semibold text-ink">6:00 pm</p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          {infoTiles.map((tile) => (
            <div key={tile.label} className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-mint-tint">
                <img src={tile.icon} alt="" className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">{tile.label}</p>
                <p className="text-sm font-medium text-ink">{tile.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 gap-3">
        <button
          type="button"
          className="rounded bg-mint px-6 py-3.5 text-sm font-medium text-ink"
        >
          Download Ticket
        </button>
        <button
          type="button"
          aria-label="View details"
          className="flex h-12 w-12 items-center justify-center rounded border border-mint"
        >
          <img src={iconChevronForward} alt="" className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
