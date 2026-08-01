import { Link } from 'react-router-dom'
import logoDark from '../assets/icons/logo-nav-dark.svg'
import iconPlane from '../assets/icons/icon-plane.svg'
import iconBed from '../assets/icons/icon-bed.svg'
import iconHeart from '../assets/icons/icon-heart.svg'
import iconArrowDown from '../assets/icons/icon-arrow-down-small.svg'
import avatarJohn from '../assets/img/avatar-john.jpg'

export default function LoggedInHeader() {
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
          <li>
            <Link to="/hotels" className="flex items-center gap-2 border-b-2 border-mint pb-1 text-sm font-semibold text-ink">
              <img src={iconBed} alt="" className="h-6 w-6" />
              Find Stays
            </Link>
          </li>
        </ul>

        <Link to="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <img src={logoDark} alt="Golobe" className="h-9 w-auto" />
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 border-b-2 border-mint pb-1">
            <a href="#" className="flex items-center gap-2 text-sm font-semibold text-ink">
              <img src={iconHeart} alt="" className="h-6 w-6" />
              Favourites
            </a>
            <span className="text-sm font-semibold text-ink">|</span>
          </div>
          <Link to="/account" className="flex items-center gap-2">
            <img src={avatarJohn} alt="" className="h-11 w-11 rounded-full object-cover" />
            <span className="text-sm font-semibold text-ink">John D.</span>
            <img src={iconArrowDown} alt="" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
