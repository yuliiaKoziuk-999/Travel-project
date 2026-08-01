import LoggedInHeader from '../components/LoggedInHeader'
import HotelSearchBarCompact from '../components/HotelSearchBarCompact'
import HotelFiltersSidebar from '../components/HotelFiltersSidebar'
import HotelResults from '../components/HotelResults'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function HotelListing() {
  return (
    <>
      <LoggedInHeader />

      <Container>
        <div className="pt-6">
          <HotelSearchBarCompact />
        </div>

        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:gap-12">
          <HotelFiltersSidebar />
          <HotelResults />
        </div>
      </Container>

      <Footer />
    </>
  )
}
