import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo-nav-dark.svg'
import authHero from '../assets/img/hero-bg.jpg'

type Props = PropsWithChildren<{
  imageSide?: 'left' | 'right'
}>

export default function AuthLayout({ children, imageSide = 'right' }: Props) {
  const image = (
    <div className="relative hidden overflow-hidden rounded-[30px] lg:block lg:w-[45%]">
      <img src={authHero} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <span className="h-2.5 w-8 rounded-full bg-mint" />
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-10 sm:py-12">
      <Link to="/">
        <img src={logo} alt="Golobe" className="h-9 w-auto" />
      </Link>

      <div
        className={`mx-auto mt-10 flex max-w-[1232px] flex-col gap-12 lg:flex-row ${
          imageSide === 'left' ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className="w-full lg:w-[55%]">{children}</div>
        {image}
      </div>
    </div>
  )
}
