import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthTextField from '../components/AuthTextField'
import iconChevronBack from '../assets/icons/icon-chevron-back.svg'
import iconVisa from '../assets/icons/icon-visa.svg'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'
import iconCheckbox from '../assets/icons/icon-checkbox.svg'

export default function SignUpPayment() {
  const navigate = useNavigate()

  return (
    <AuthLayout imageSide="left">
      <Link to="/signup" className="flex items-center gap-2 text-sm font-medium text-ink">
        <img src={iconChevronBack} alt="" className="h-6 w-6" />
        Back
      </Link>

      <h1 className="mt-4 font-display text-[40px] font-bold text-ink">Add a payment method</h1>
      <p className="mt-2 text-base text-ink">
        Let's get you all set up so you can access your personal account.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/')
        }}
      >
        <AuthTextField
          label="Card Number"
          defaultValue="4321 4321 4321 4321"
          trailing={<img src={iconVisa} alt="" className="h-6 w-6" />}
        />
        <div className="flex flex-col gap-4 sm:flex-row">
          <AuthTextField label="Exp. Date" defaultValue="02/27" className="flex-1" />
          <AuthTextField label="CVC" defaultValue="123" className="flex-1" />
        </div>
        <AuthTextField label="Name on Card" defaultValue="John Doe" />
        <AuthTextField
          label="Country or Region"
          defaultValue="United States"
          trailing={<img src={iconChevronDown} alt="" className="h-6 w-6" />}
        />

        <label className="flex items-center gap-3">
          <img src={iconCheckbox} alt="" className="h-6 w-6" />
          <span className="text-sm font-medium text-ink">
            Securely save my information for 1-click checkout
          </span>
        </label>

        <div className="mt-2 flex flex-col gap-4">
          <button
            type="submit"
            className="flex h-12 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
          >
            Add payment method
          </button>
          <p className="text-xs text-ink">
            By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge
            your card for this payment and future payments in accordance with their terms. You
            can always cancel your subscription.
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
