import iconBed from '../assets/icons/icon-bed.svg'
import avatarJohn from '../assets/img/avatar-john.jpg'

export default function HotelVoucherTicket() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_40px_rgba(0,0,0,0.08)] sm:flex-row">
      <div className="flex flex-1 items-center gap-6 p-8">
        <img src={iconBed} alt="" className="h-12 w-20 shrink-0 object-contain" />

        <div className="flex flex-1 items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-ink">3:00 pm</p>
            <p className="text-sm font-medium text-ink">Check In</p>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2 px-4">
            <span className="h-px flex-1 bg-ink/30" />
            <img src={iconBed} alt="" className="h-8 w-8" />
            <span className="h-px flex-1 bg-ink/30" />
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold text-ink">11:00 am</p>
            <p className="text-sm font-medium text-ink">Check Out</p>
          </div>
        </div>
      </div>

      <div className="relative flex w-full items-center gap-4 bg-mint p-8 sm:w-[320px]">
        <span className="absolute -left-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-surface sm:block" />
        <img src={avatarJohn} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" />
        <div>
          <p className="font-display text-base font-bold text-ink">John D.</p>
          <p className="text-sm font-medium text-ink">Booking Voucher N&apos;123</p>
        </div>
      </div>
    </div>
  )
}
