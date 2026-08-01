import { Link, useParams } from 'react-router-dom'
import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import BookingBreadcrumb from '../components/BookingBreadcrumb'
import BookingHotelSummary from '../components/BookingHotelSummary'
import PaymentPlanOptions from '../components/PaymentPlanOptions'
import HotelBookingPriceSidebar from '../components/HotelBookingPriceSidebar'
import iconFacebook from '../assets/icons/icon-facebook.svg'
import iconGoogle from '../assets/icons/icon-google.svg'
import iconApple from '../assets/icons/icon-apple.svg'
import iconMail from '../assets/icons/icon-mail.svg'

export default function HotelBookingLogin() {
  const { id = '1' } = useParams()

  return (
    <>
      <LoggedInHeader />

      <Container>
        <BookingBreadcrumb />

        <div className="mt-6 flex flex-col gap-8 pb-16 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6">
            <BookingHotelSummary />
            <PaymentPlanOptions />

            <div className="rounded-xl bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-ink">Login or Sign up to book</h2>

              <label className="relative mt-6 flex h-14 items-center rounded border border-black/30 px-4">
                <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
                  Phone Number
                </span>
                <input className="w-full bg-transparent text-base text-ink-soft outline-none" />
              </label>
              <p className="mt-3 text-sm text-ink">
                We'll call or text you to confirm your number. Standard message and data rates
                apply. Privacy Policy
              </p>

              <Link
                to={`/hotels/${id}/booking/payment`}
                className="mt-6 flex h-12 items-center justify-center rounded bg-mint text-base font-medium text-ink"
              >
                Continue
              </Link>

              <div className="my-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-ink" />
                <span className="text-base font-medium text-ink">Or</span>
                <span className="h-px flex-1 bg-ink" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <button
                  type="button"
                  className="flex h-14 items-center justify-center rounded border border-mint"
                >
                  <img src={iconFacebook} alt="Facebook" className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="flex h-14 items-center justify-center rounded border border-mint"
                >
                  <img src={iconGoogle} alt="Google" className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="flex h-14 items-center justify-center rounded border border-mint"
                >
                  <img src={iconApple} alt="Apple" className="h-6 w-6" />
                </button>
              </div>

              <button
                type="button"
                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded border border-mint text-base font-medium text-ink"
              >
                <img src={iconMail} alt="" className="h-6 w-6" />
                Continue with email
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[450px] lg:shrink-0">
            <HotelBookingPriceSidebar />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
