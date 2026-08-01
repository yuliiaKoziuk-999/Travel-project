import { useState } from 'react'

export default function PaymentPlanOptions() {
  const [plan, setPlan] = useState<'full' | 'partial'>('full')

  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <button
        type="button"
        onClick={() => setPlan('full')}
        className="flex w-full items-center justify-between gap-4 bg-mint p-6 text-left"
      >
        <div>
          <p className="font-display text-base font-bold text-ink">Pay in full</p>
          <p className="mt-1 text-sm text-ink">Pay the total and you are all set</p>
        </div>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink ${
            plan === 'full' ? 'bg-ink' : 'bg-transparent'
          }`}
        >
          {plan === 'full' && <span className="h-3 w-3 rounded-full bg-white" />}
        </span>
      </button>

      <button
        type="button"
        onClick={() => setPlan('partial')}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div>
          <p className="font-display text-base font-bold text-ink">Pay part now, part later</p>
          <p className="mt-1 text-sm text-ink">
            Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same
            payment method on Nov 14, 2022. No extra fees.
          </p>
          <p className="mt-2 text-xs font-medium text-ink underline">More info</p>
        </div>
        <span
          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink ${
            plan === 'partial' ? 'bg-ink' : 'bg-transparent'
          }`}
        >
          {plan === 'partial' && <span className="h-3 w-3 rounded-full bg-white" />}
        </span>
      </button>
    </div>
  )
}
