import iconBed from '../assets/icons/icon-bed.svg'
import iconWifi from '../assets/icons/icon-wifi.svg'
import iconStopwatch from '../assets/icons/icon-stopwatch.svg'
import iconFastfood from '../assets/icons/icon-fastfood.svg'

const amenities = [iconBed, iconWifi, iconStopwatch, iconFastfood]

export default function BookingHotelSummary() {
  return (
    <div className="rounded-xl bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h2 className="font-display text-2xl font-bold text-ink">CVK Park Bosphorus Hotel</h2>
        <p className="text-3xl font-bold text-[#FF8682]">$104</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-base font-bold text-ink">3 Nights, Standard Room</h3>
        <p className="text-xl font-medium text-ink">07 - 10 Nov</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-4 rounded-lg border border-mint/50 bg-white p-4">
          <img src={iconBed} alt="" className="h-11 w-11 object-contain" />
          <div>
            <p className="text-2xl font-semibold text-ink">Standard Room</p>
            <p className="text-sm font-medium text-ink">1 Queen Bed</p>
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
          <p className="text-2xl font-semibold text-ink">3:00 pm</p>
          <p className="text-base font-medium text-ink">Check In</p>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2 px-6">
          <span className="h-px flex-1 bg-black" />
          <img src={iconBed} alt="" className="h-12 w-12" />
          <span className="h-px flex-1 bg-black" />
        </div>

        <div className="text-right">
          <p className="text-2xl font-semibold text-ink">11:00 am</p>
          <p className="text-base font-medium text-ink">Check Out</p>
        </div>
      </div>
    </div>
  )
}
