import heroBg from '../assets/img/hero-bg.jpg'
import Navbar from './Navbar'
import SearchWidget from './SearchWidget'

export default function Hero() {
  return (
    <header className="px-4 pt-4 sm:px-[30px] sm:pt-[30px]">
      <div
        className="relative overflow-hidden rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />

        <div className="relative">
          <Navbar />

          <div className="mx-auto max-w-2xl px-4 pt-10 pb-32 text-center sm:pt-16 sm:pb-40">
            <p className="font-display text-3xl font-bold leading-tight text-white sm:text-[45px]">
              Helping Others
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-[80px]">
              Live &amp; Travel
            </h1>
            <p className="mt-4 text-lg font-semibold text-white sm:text-xl">
              Special offers to suit your plan
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-[1232px] sm:-mt-28">
        <SearchWidget />
      </div>
    </header>
  )
}
