import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import BookingBreadcrumb from '../components/BookingBreadcrumb'
import BoardingPassTicket from '../components/BoardingPassTicket'

export default function BookingConfirmation() {
  return (
    <>
      <LoggedInHeader />

      <Container>
        <BookingBreadcrumb />

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-2xl font-bold text-ink">Emirates A380 Airbus</h1>
            <p className="mt-2 text-sm font-medium text-ink">Booking confirmed — enjoy your trip!</p>
          </div>
          <p className="text-3xl font-bold text-ink">$240</p>
        </div>

        <div className="mt-8">
          <BoardingPassTicket />
        </div>

        <div className="mt-14 pb-16">
          <h2 className="text-2xl font-semibold text-ink">Terms and Conditions</h2>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-ink">Payments</h3>
            <p className="mt-4 text-sm text-ink">
              If you are purchasing your ticket using a debit or credit card via the Website, we
              will process these payments via the automated secure common payment gateway which
              will be subject to fraud screening purposes.
            </p>
            <p className="mt-4 text-sm text-ink">
              If you do not supply the correct card billing address and/or cardholder
              information, your booking will not be confirmed and the overall cost may increase.
              We reserve the right to cancel your booking if payment is declined for any reason or
              if you have supplied incorrect card information. If we become aware of, or is
              notified of, any fraud or illegal activity associated with the payment for the
              booking, the booking will be cancelled and you will be liable for all costs and
              expenses arising from such cancellation, without prejudice to any action that may be
              taken against us.
            </p>
            <p className="mt-4 text-sm text-ink">
              Golobe may require the card holder to provide additional payment verification upon
              request by either submitting an online form or visiting the nearest Golobe office,
              or at the airport at the time of check-in. Golobe reserves the right to deny
              boarding or to collect a guarantee payment (in cash or from another credit card) if
              the card originally used for the purchase cannot be presented by the cardholder at
              check-in or when collecting the tickets, or in the case the original payment has
              been withheld or disputed by the card issuing bank. Credit card details are held in
              a secured environment and transferred through an internationally accepted system.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-ink">Contact Us</h3>
            <p className="mt-4 text-sm text-ink">
              If you have any questions about our Website or our Terms of Use, please contact:
              <br />
              Golobe Group Q.C.S.C
              <br />
              Golobe Tower
              <br />
              P.O. Box: 22550
              <br />
              Doha, State of Qatar
              <br />
              Further contact details can be found at golobe.com/help
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
