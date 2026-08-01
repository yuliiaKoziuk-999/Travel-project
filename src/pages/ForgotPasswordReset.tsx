import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthTextField from '../components/AuthTextField'
import iconEye from '../assets/icons/icon-eye.svg'
import iconEyeOff from '../assets/icons/icon-eye-off.svg'

export default function ForgotPasswordReset() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <AuthLayout imageSide="right">
      <h1 className="font-display text-4xl font-bold text-ink">Set a password</h1>
      <p className="mt-2 text-base text-ink">
        Your previous password has been reset. Please set a new password for your account.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/login')
        }}
      >
        <AuthTextField
          label="Create Password"
          type={showPassword ? 'text' : 'password'}
          defaultValue="password123"
          trailing={
            <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label="Toggle password visibility">
              <img src={showPassword ? iconEye : iconEyeOff} alt="" className="h-6 w-6" />
            </button>
          }
        />
        <AuthTextField
          label="Re-enter Password"
          type={showPassword ? 'text' : 'password'}
          defaultValue="password123"
          trailing={
            <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label="Toggle password visibility">
              <img src={showPassword ? iconEye : iconEyeOff} alt="" className="h-6 w-6" />
            </button>
          }
        />

        <button
          type="submit"
          className="mt-2 flex h-12 items-center justify-center rounded bg-mint text-sm font-semibold text-ink"
        >
          Set password
        </button>
      </form>
    </AuthLayout>
  )
}
