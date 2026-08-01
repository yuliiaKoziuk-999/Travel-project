import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthTextField from '../components/AuthTextField'
import SocialAuthButtons from '../components/SocialAuthButtons'
import iconEye from '../assets/icons/icon-eye.svg'
import iconEyeOff from '../assets/icons/icon-eye-off.svg'
import iconCheckbox from '../assets/icons/icon-checkbox.svg'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <AuthLayout imageSide="left">
      <h1 className="font-display text-4xl font-bold text-ink">Sign up</h1>
      <p className="mt-2 text-base text-ink">
        Let's get you all set up so you can access your personal account.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/signup/payment')
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <AuthTextField label="First Name" defaultValue="John" className="flex-1" />
          <AuthTextField label="Last Name" defaultValue="Doe" className="flex-1" />
        </div>
        <AuthTextField label="Email" defaultValue="john.doe@gmail.com" type="email" />
        <AuthTextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          defaultValue="password123"
          trailing={
            <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label="Toggle password visibility">
              <img src={showPassword ? iconEye : iconEyeOff} alt="" className="h-6 w-6" />
            </button>
          }
        />

        <label className="flex items-center gap-3">
          <img src={iconCheckbox} alt="" className="h-6 w-6" />
          <span className="text-sm font-medium text-ink">
            I agree to all the Terms and Privacy Policies
          </span>
        </label>

        <div className="mt-2 flex flex-col gap-4">
          <button
            type="submit"
            className="flex h-12 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
          >
            Create account
          </button>
          <p className="text-sm font-medium text-ink">
            Already have an account?{' '}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </form>

      <SocialAuthButtons label="Or Sign up with" />
    </AuthLayout>
  )
}
