import { Link } from 'react-router-dom'
import coverImg from '../assets/img/promo-hotels.jpg'
import avatarJohn from '../assets/img/avatar-john.jpg'
import iconUpload from '../assets/icons/icon-upload.svg'
import iconPen from '../assets/icons/icon-pen.svg'

const tabs = [
  { label: 'Account', to: '/account' },
  { label: 'History', to: '/account/history' },
  { label: 'Payment methods', to: '/account/payment-methods' },
]

export default function AccountProfileHeader({ active }: { active: string }) {
  return (
    <div>
      <div className="relative">
        <img src={coverImg} alt="" className="h-[220px] w-full rounded-xl object-cover sm:h-[280px]" />
        <button
          type="button"
          className="absolute right-6 top-6 flex items-center gap-2 rounded bg-mint px-6 py-3.5 text-sm font-medium text-ink"
        >
          <img src={iconUpload} alt="" className="h-4 w-4" />
          Upload new cover
        </button>
      </div>

      <div className="relative -mt-20 flex flex-col items-center px-4 sm:-mt-16">
        <div className="relative">
          <img
            src={avatarJohn}
            alt="John Doe"
            className="h-[140px] w-[140px] rounded-full border-4 border-[#FF8682] object-cover sm:h-[160px] sm:w-[160px]"
          />
          <button
            type="button"
            aria-label="Edit profile photo"
            className="absolute bottom-1 right-1 flex h-11 w-11 items-center justify-center rounded-full bg-[#FF8682]"
          >
            <img src={iconPen} alt="" className="h-6 w-6" />
          </button>
        </div>
        <p className="mt-4 text-2xl font-semibold text-ink">John Doe.</p>
        <p className="text-base text-ink">john.doe@gmail.com</p>
      </div>

      <div className="mt-8 flex justify-center gap-8 rounded-xl bg-white sm:gap-16">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className={`px-2 py-6 text-base font-semibold text-ink ${
              active === tab.to ? 'border-b-4 border-mint' : ''
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
