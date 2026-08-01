import LoggedInHeader from '../components/LoggedInHeader'
import SearchBarCompact from '../components/SearchBarCompact'
import FiltersSidebar from '../components/FiltersSidebar'
import FlightResults from '../components/FlightResults'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function FlightListing() {
  return (
    <>
      <LoggedInHeader />

      <Container>
        <div className="pt-6">
          <SearchBarCompact />
        </div>

        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:gap-12">
          <FiltersSidebar />
          <FlightResults />
        </div>
      </Container>

      <Footer />
    </>
  )
}
