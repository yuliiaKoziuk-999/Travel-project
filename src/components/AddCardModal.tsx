import iconVisa from '../assets/icons/icon-visa.svg'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'
import iconCheckbox from '../assets/icons/icon-checkbox.svg'

export default function AddCardModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-xl rounded-xl bg-white p-8 sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-6 top-6 text-2xl leading-none text-ink"
        >
          ×
        </button>

        <h2 className="font-display text-3xl font-bold text-ink">Add a new Card</h2>

        <div className="mt-6 flex flex-col gap-4">
          <label className="relative flex h-14 items-center rounded border border-black/30 px-4">
            <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
              Card Number
            </span>
            <input
              defaultValue="4321 4321 4321 4321"
              className="w-full bg-transparent text-base text-ink-soft outline-none"
            />
            <img src={iconVisa} alt="" className="h-6 w-6 shrink-0" />
          </label>

          <div className="flex gap-4">
            <label className="relative flex h-14 flex-1 items-center rounded border border-black/30 px-4">
              <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
                Expiry Date
              </span>
              <input
                placeholder="MM/YY"
                className="w-full bg-transparent text-base text-ink-soft outline-none"
              />
            </label>
            <label className="relative flex h-14 flex-1 items-center rounded border border-black/30 px-4">
              <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
                CVC
              </span>
              <input className="w-full bg-transparent text-base text-ink-soft outline-none" />
            </label>
          </div>

          <label className="relative flex h-14 items-center rounded border border-black/30 px-4">
            <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
              Name on Card
            </span>
            <input
              defaultValue="John Doe"
              className="w-full bg-transparent text-base text-ink-soft outline-none"
            />
          </label>

          <label className="relative flex h-14 items-center rounded border border-black/30 px-4">
            <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
              Country or Region
            </span>
            <input
              defaultValue="United States"
              className="w-full bg-transparent text-base text-ink-soft outline-none"
            />
            <img src={iconChevronDown} alt="" className="h-6 w-6 shrink-0" />
          </label>

          <label className="flex items-center gap-3">
            <img src={iconCheckbox} alt="" className="h-6 w-6" />
            <span className="text-sm font-medium text-ink">
              Securely save my information for 1-click checkout
            </span>
          </label>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 flex h-12 w-full items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
        >
          Add Card
        </button>
        <p className="mt-4 text-xs text-ink">
          By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your
          card for this payment and future payments in accordance with their terms. You can
          always cancel your subscription.
        </p>
      </div>
    </div>
  )
}
