import heroBg from '../assets/img/search-hero-bg.jpg'
import FlightSearchCard from './FlightSearchCard'

export default function FlightSearchHero() {
  return (
    <div className="relative">
      <div
        className="relative h-[420px] bg-cover bg-center sm:h-[537px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00234D]/60 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-4 pt-16 sm:px-8 sm:pt-24">
          <div className="max-w-md">
            <p className="font-display text-3xl font-bold leading-tight text-white sm:text-[45px]">
              Make your travel whishlist, we'll do the rest
            </p>
            <p className="mt-4 text-lg font-medium text-white sm:text-xl">
              Special offers to suit your plan
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-16 max-w-[1232px] px-4 sm:-mt-20 sm:px-0">
        <FlightSearchCard />
      </div>
    </div>
  )
}
