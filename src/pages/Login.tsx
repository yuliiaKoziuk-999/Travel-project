import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthTextField from '../components/AuthTextField'
import SocialAuthButtons from '../components/SocialAuthButtons'
import iconEye from '../assets/icons/icon-eye.svg'
import iconEyeOff from '../assets/icons/icon-eye-off.svg'
import iconCheckbox from '../assets/icons/icon-checkbox.svg'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthLayout imageSide="right">
      <h1 className="font-display text-[40px] font-bold text-ink">Login</h1>
      <p className="mt-2 text-base text-ink">Login to access your Golobe account</p>

      <form className="mt-8 flex flex-col gap-4">
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

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3">
            <img src={iconCheckbox} alt="" className="h-6 w-6" />
            <span className="text-sm font-medium text-ink">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm font-medium text-[#FF8682]">
            Forgot Password
          </Link>
        </div>

        <div className="mt-2 flex flex-col gap-4">
          <button
            type="submit"
            className="flex h-12 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
          >
            Login
          </button>
          <p className="text-sm font-medium text-ink">
            Don't have an account?{' '}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>

      <SocialAuthButtons label="Or login with" />
    </AuthLayout>
  )
}
