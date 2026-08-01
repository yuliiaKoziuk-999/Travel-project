import iconPlane from '../assets/icons/icon-plane.svg'
import iconWifi from '../assets/icons/icon-wifi.svg'
import iconStopwatch from '../assets/icons/icon-stopwatch.svg'
import iconFastfood from '../assets/icons/icon-fastfood.svg'
import iconSeat from '../assets/icons/icon-seat.svg'
import airlineLogo from '../assets/img/airline-logo-emirates.png'

const amenities = [iconPlane, iconWifi, iconStopwatch, iconFastfood, iconSeat]

export default function BookingFlightSummary() {
  return (
    <div className="rounded-xl bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h2 className="font-display text-2xl font-bold text-ink">Emirates A380 Airbus</h2>
        <p className="text-3xl font-bold text-[#FF8682]">$240</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-base font-bold text-ink">Return Wed, Dec 8</h3>
        <p className="text-xl font-medium text-ink">2h 28m</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-4 rounded-lg border border-mint/50 bg-white p-4">
          <img src={airlineLogo} alt="" className="h-11 w-16 object-contain" />
          <div>
            <p className="text-2xl font-semibold text-ink">Emirates</p>
            <p className="text-sm font-medium text-ink">Airbus A320</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-around gap-4 rounded-xl bg-white py-5">
          {amenities.map((icon, i) => (
            <div key={i} className={`flex items-center ${i > 0 ? 'border-l border-[#D7E2EE] pl-4' : ''}`}>
              <img src={icon} alt="" className="h-6 w-6" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold text-ink">12:00 pm</p>
          <p className="text-base font-medium text-ink">Newark(EWR)</p>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2 px-6">
          <span className="h-px flex-1 bg-black" />
          <img src={iconPlane} alt="" className="h-12 w-12" />
          <span className="h-px flex-1 bg-black" />
        </div>

        <div className="text-right">
          <p className="text-2xl font-semibold text-ink">12:00 pm</p>
          <p className="text-base font-medium text-ink">Newark(EWR)</p>
        </div>
      </div>
    </div>
  )
}
