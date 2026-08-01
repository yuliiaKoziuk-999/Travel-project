import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthTextField from '../components/AuthTextField'
import SocialAuthButtons from '../components/SocialAuthButtons'
import iconChevronBack from '../assets/icons/icon-chevron-back.svg'

export default function ForgotPassword() {
  const navigate = useNavigate()

  return (
    <AuthLayout imageSide="right">
      <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-ink">
        <img src={iconChevronBack} alt="" className="h-6 w-6" />
        Back to login
      </Link>

      <h1 className="mt-4 font-display text-[40px] font-bold text-ink">Forgot your password?</h1>
      <p className="mt-2 text-base text-ink">
        Don't worry, happens to all of us. Enter your email below to recover your password
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/forgot-password/verify')
        }}
      >
        <AuthTextField label="Email" defaultValue="john.doe@gmail.com" type="email" />
        <button
          type="submit"
          className="flex h-12 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
        >
          Submit
        </button>
      </form>

      <SocialAuthButtons label="Or login with" />
    </AuthLayout>
  )
}
