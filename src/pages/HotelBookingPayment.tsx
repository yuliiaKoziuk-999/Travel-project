import { Link, useParams } from 'react-router-dom'
import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import BookingBreadcrumb from '../components/BookingBreadcrumb'
import BookingHotelSummary from '../components/BookingHotelSummary'
import PaymentPlanOptions from '../components/PaymentPlanOptions'
import PaymentMethodSelector from '../components/PaymentMethodSelector'
import HotelBookingPriceSidebar from '../components/HotelBookingPriceSidebar'

export default function HotelBookingPayment() {
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
            <PaymentMethodSelector />

            <Link
              to={`/hotels/${id}/booking/confirmation`}
              className="flex h-12 items-center justify-center rounded bg-mint text-base font-medium text-ink"
            >
              Confirm and pay
            </Link>
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
