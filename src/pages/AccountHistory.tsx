import { useState } from 'react'
import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import AccountProfileHeader from '../components/AccountProfileHeader'
import HistoryTicketCard from '../components/HistoryTicketCard'
import iconPlane from '../assets/icons/icon-plane.svg'
import iconBed from '../assets/icons/icon-bed.svg'
import iconChevronDown from '../assets/icons/icon-chevron-down.svg'

export default function AccountHistory() {
  const [tab, setTab] = useState<'flights' | 'stays'>('flights')

  return (
    <>
      <LoggedInHeader />

      <Container>
        <div className="py-6">
          <AccountProfileHeader active="/account/history" />

          <div className="mt-10 pb-16">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="font-display text-3xl font-bold text-ink">Tickets/Bookings</h1>
              <div className="flex items-center gap-1 text-sm font-semibold text-ink">
                Upcoming
                <img src={iconChevronDown} alt="" className="h-[18px] w-[18px]" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-8 rounded-xl bg-white px-6">
              <button
                type="button"
                onClick={() => setTab('flights')}
                className={`flex items-center gap-2 py-6 text-base font-semibold text-ink ${
                  tab === 'flights' ? 'border-b-4 border-mint' : 'opacity-50'
                }`}
              >
                <img src={iconPlane} alt="" className="h-6 w-6" />
                Flights
              </button>
              <button
                type="button"
                onClick={() => setTab('stays')}
                className={`flex items-center gap-2 py-6 text-base font-semibold text-ink ${
                  tab === 'stays' ? 'border-b-4 border-mint' : 'opacity-50'
                }`}
              >
                <img src={iconBed} alt="" className="h-6 w-6" />
                Stays
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              <HistoryTicketCard />
              <HistoryTicketCard />
              <HistoryTicketCard />
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
