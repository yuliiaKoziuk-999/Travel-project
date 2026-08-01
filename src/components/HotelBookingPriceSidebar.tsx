import heroThumb from '../assets/img/destination-istanbul.jpg'

const priceRows = [
  { label: 'Room Rate (3 nights)', value: '$312' },
  { label: 'Discount', value: '$30' },
  { label: 'Taxes', value: '$28' },
  { label: 'Service Fee', value: '$15' },
]

export default function HotelBookingPriceSidebar() {
  return (
    <aside className="h-fit rounded-xl bg-white p-6">
      <div className="flex items-center gap-4">
        <img src={heroThumb} alt="" className="h-[120px] w-[120px] shrink-0 rounded-xl object-cover" />
        <div>
          <p className="text-base font-medium text-ink">Standard Room</p>
          <p className="mt-1 text-xl font-semibold text-ink">CVK Park Bosphorus Hotel</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex h-8 w-10 items-center justify-center rounded border border-mint text-xs font-medium text-ink">
              4.2
            </span>
            <span className="text-xs font-medium text-ink">Very Good 54 reviews</span>
          </div>
        </div>
      </div>

      <hr className="my-6 border-ink" />

      <p className="text-base font-medium text-ink">Your booking is protected by golobe</p>

      <hr className="my-6 border-ink" />

      <div>
        <h3 className="font-display text-base font-bold text-ink">Price Details</h3>
        <div className="mt-4 flex flex-col gap-4">
          {priceRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <p className="text-base font-medium text-ink">{row.label}</p>
              <p className="text-base font-semibold text-ink">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-ink" />

      <div className="flex items-center justify-between">
        <p className="text-base font-medium text-ink">Total</p>
        <p className="text-base font-semibold text-ink">$325</p>
      </div>
    </aside>
  )
}
