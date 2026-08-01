import iconBin from '../assets/icons/icon-bin.svg'

export default function CreditCardVisual() {
  return (
    <div className="flex h-[212px] w-full max-w-[378px] flex-col justify-between rounded-2xl bg-mint p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-2xl font-semibold text-ink">**** **** ****</p>
          <p className="text-3xl font-semibold text-ink">4321</p>
        </div>
        <button type="button" aria-label="Remove card">
          <img src={iconBin} alt="" className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-medium text-ink">Valid Thru</p>
          <p className="text-xl font-semibold text-ink">02/27</p>
        </div>
        <div className="flex">
          <span className="h-8 w-8 rounded-full bg-ink/80" />
          <span className="-ml-3 h-8 w-8 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  )
}
