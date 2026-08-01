import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import iconPlane from '../assets/icons/icon-plane.svg'
import iconBed from '../assets/icons/icon-bed.svg'

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-4 py-6 sm:px-8">
      <ul className="hidden items-center gap-6 md:flex">
        <li>
          <Link to="/flights" className="flex items-center gap-2 text-sm font-semibold text-white">
            <img src={iconPlane} alt="" className="h-6 w-6" />
            Find Flight
          </Link>
        </li>
        <li className="h-6 w-px bg-white/40" />
        <li>
          <Link to="/hotels" className="flex items-center gap-2 text-sm font-semibold text-white">
            <img src={iconBed} alt="" className="h-6 w-6" />
            Find Stays
          </Link>
        </li>
      </ul>

      <Link to="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
        <img src={logo} alt="Golobe" className="h-9 w-auto" />
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/login" className="text-sm font-semibold text-white">
          Login
        </Link>
        <Link
          to="/signup"
          className="rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-ink"
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}
