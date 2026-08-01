import { Link } from 'react-router-dom'
import logoDark from '../assets/icons/logo-nav-dark.svg'
import iconPlane from '../assets/icons/icon-plane.svg'
import iconBed from '../assets/icons/icon-bed.svg'

export default function HeaderDefault() {
  return (
    <header className="bg-white px-4 py-6 sm:px-8">
      <nav className="relative flex items-center justify-between">
        <ul className="hidden items-center gap-6 md:flex">
          <li className="border-b-2 border-mint pb-1">
            <Link to="/flights" className="flex items-center gap-2 text-sm font-semibold text-ink">
              <img src={iconPlane} alt="" className="h-6 w-6" />
              Find Flight
            </Link>
          </li>
          <li className="border-b-2 border-mint pb-1">
            <Link to="/hotels" className="flex items-center gap-2 text-sm font-semibold text-ink">
              <img src={iconBed} alt="" className="h-6 w-6" />
              Find Stays
            </Link>
          </li>
        </ul>

        <Link to="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <img src={logoDark} alt="Golobe" className="h-9 w-auto" />
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-semibold text-ink">
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  )
}
