import iconChevronForward from '../assets/icons/icon-chevron-forward.svg'

export default function BookingBreadcrumb() {
  return (
    <div className="flex items-center gap-2 pt-8 text-sm font-medium">
      <span className="text-[#FF8682]">Turkey</span>
      <img src={iconChevronForward} alt="" className="h-4 w-4" />
      <span className="text-[#FF8682]">Istanbul</span>
      <img src={iconChevronForward} alt="" className="h-4 w-4" />
      <span className="text-ink">CVK Park Bosphorus Hotel Istanbul</span>
    </div>
  )
}
