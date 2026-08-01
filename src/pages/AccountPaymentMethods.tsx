import { useState } from 'react'
import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import AccountProfileHeader from '../components/AccountProfileHeader'
import CreditCardVisual from '../components/CreditCardVisual'
import AddCardModal from '../components/AddCardModal'
import iconAddCircle from '../assets/icons/icon-add-circle.svg'

export default function AccountPaymentMethods() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LoggedInHeader />

      <Container>
        <div className="py-6">
          <AccountProfileHeader active="/account/payment-methods" />

          <div className="mt-10 pb-16">
            <h1 className="font-display text-[32px] font-bold text-ink">Payment methods</h1>

            <div className="mt-6 flex flex-wrap gap-6 rounded-[24px] bg-white p-6">
              <CreditCardVisual />

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex h-[212px] w-full max-w-[378px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-mint"
              >
                <img src={iconAddCircle} alt="" className="h-16 w-16" />
                <span className="text-xs font-medium text-ink">Add a new card</span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Footer />

      {modalOpen && <AddCardModal onClose={() => setModalOpen(false)} />}
    </>
  )
}
