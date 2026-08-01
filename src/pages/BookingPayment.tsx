import { Link, useParams } from 'react-router-dom'
import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import BookingBreadcrumb from '../components/BookingBreadcrumb'
import BookingFlightSummary from '../components/BookingFlightSummary'
import PaymentPlanOptions from '../components/PaymentPlanOptions'
import PaymentMethodSelector from '../components/PaymentMethodSelector'
import BookingPriceSidebar from '../components/BookingPriceSidebar'

export default function BookingPayment() {
  const { id = '1' } = useParams()

  return (
    <>
      <LoggedInHeader />

      <Container>
        <BookingBreadcrumb />

        <div className="mt-6 flex flex-col gap-8 pb-16 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6">
            <BookingFlightSummary />
            <PaymentPlanOptions />
            <PaymentMethodSelector />

            <Link
              to={`/flights/${id}/booking/confirmation`}
              className="flex h-12 items-center justify-center rounded bg-mint text-base font-medium text-ink"
            >
              Confirm and pay
            </Link>
          </div>

          <div className="w-full lg:w-[450px] lg:shrink-0">
            <BookingPriceSidebar />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
