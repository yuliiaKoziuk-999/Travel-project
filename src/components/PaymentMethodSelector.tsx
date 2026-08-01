import { useState } from 'react'
import iconVisa from '../assets/icons/icon-visa.svg'
import iconAddCircle from '../assets/icons/icon-add-circle.svg'
import AddCardModal from './AddCardModal'

export default function PaymentMethodSelector() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 rounded-xl bg-mint p-6">
        <div className="flex items-center gap-4">
          <img src={iconVisa} alt="Visa" className="h-8 w-8" />
          <div className="flex items-baseline gap-3">
            <p className="font-display text-base font-bold text-ink">**** 4321</p>
            <p className="text-sm text-ink">02/27</p>
          </div>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-ink">
          <span className="h-3 w-3 rounded-full bg-white" />
        </span>
      </div>

      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="mt-6 flex w-full flex-col items-center gap-4 rounded-xl border-2 border-dashed border-mint py-10"
      >
        <img src={iconAddCircle} alt="" className="h-16 w-16" />
        <span className="text-xs font-medium text-ink">Add a new card</span>
      </button>

      {modalOpen && <AddCardModal onClose={() => setModalOpen(false)} />}
    </div>
  )
}
