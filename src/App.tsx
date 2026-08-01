import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import FlightsSearch from './pages/FlightsSearch'
import FlightListing from './pages/FlightListing'
import FlightDetail from './pages/FlightDetail'
import BookingLogin from './pages/BookingLogin'
import BookingPayment from './pages/BookingPayment'
import BookingConfirmation from './pages/BookingConfirmation'
import HotelListing from './pages/HotelListing'
import HotelDetail from './pages/HotelDetail'
import HotelBookingLogin from './pages/HotelBookingLogin'
import HotelBookingPayment from './pages/HotelBookingPayment'
import HotelBookingConfirmation from './pages/HotelBookingConfirmation'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SignUpPayment from './pages/SignUpPayment'
import ForgotPassword from './pages/ForgotPassword'
import ForgotPasswordVerify from './pages/ForgotPasswordVerify'
import ForgotPasswordReset from './pages/ForgotPasswordReset'
import Account from './pages/Account'
import AccountHistory from './pages/AccountHistory'
import AccountPaymentMethods from './pages/AccountPaymentMethods'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/history" element={<AccountHistory />} />
        <Route path="/account/payment-methods" element={<AccountPaymentMethods />} />
        <Route path="/flights/search" element={<FlightsSearch />} />
        <Route path="/flights" element={<FlightListing />} />
        <Route path="/flights/:id" element={<FlightDetail />} />
        <Route path="/flights/:id/booking" element={<BookingLogin />} />
        <Route path="/flights/:id/booking/payment" element={<BookingPayment />} />
        <Route path="/flights/:id/booking/confirmation" element={<BookingConfirmation />} />
        <Route path="/hotels" element={<HotelListing />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="/hotels/:id/booking" element={<HotelBookingLogin />} />
        <Route path="/hotels/:id/booking/payment" element={<HotelBookingPayment />} />
        <Route path="/hotels/:id/booking/confirmation" element={<HotelBookingConfirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/payment" element={<SignUpPayment />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/verify" element={<ForgotPasswordVerify />} />
        <Route path="/forgot-password/reset" element={<ForgotPasswordReset />} />
      </Routes>
    </div>
  )
}

export default App
