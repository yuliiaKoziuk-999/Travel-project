import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthTextField from '../components/AuthTextField'
import iconChevronBack from '../assets/icons/icon-chevron-back.svg'
import iconEye from '../assets/icons/icon-eye.svg'

export default function ForgotPasswordVerify() {
  const navigate = useNavigate()

  return (
    <AuthLayout imageSide="right">
      <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-ink">
        <img src={iconChevronBack} alt="" className="h-6 w-6" />
        Back to login
      </Link>

      <h1 className="mt-4 font-display text-4xl font-bold text-ink">Verify code</h1>
      <p className="mt-2 text-base text-ink">
        An authentication code has been sent to your email.
      </p>

      <form
        className="mt-8 flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/forgot-password/reset')
        }}
      >
        <AuthTextField
          label="Enter Code"
          defaultValue="7789BM6X"
          trailing={<img src={iconEye} alt="" className="h-6 w-6" />}
        />
        <p className="text-sm font-medium text-ink">
          Didn't receive a code?{' '}
          <button type="button" className="underline">
            Resend
          </button>
        </p>

        <button
          type="submit"
          className="mt-4 flex h-12 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
        >
          Verify
        </button>
      </form>
    </AuthLayout>
  )
}
