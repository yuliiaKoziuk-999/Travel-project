import iconFacebook from '../assets/icons/icon-facebook.svg'
import iconGoogle from '../assets/icons/icon-google.svg'
import iconApple from '../assets/icons/icon-apple.svg'

export default function SocialAuthButtons({ label }: { label: string }) {
  return (
    <>
      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-ink" />
        <span className="whitespace-nowrap text-sm text-ink">{label}</span>
        <span className="h-px flex-1 bg-ink" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button type="button" className="flex h-14 items-center justify-center rounded border border-mint">
          <img src={iconFacebook} alt="Facebook" className="h-6 w-6" />
        </button>
        <button type="button" className="flex h-14 items-center justify-center rounded border border-mint">
          <img src={iconGoogle} alt="Google" className="h-6 w-6" />
        </button>
        <button type="button" className="flex h-14 items-center justify-center rounded border border-mint">
          <img src={iconApple} alt="Apple" className="h-6 w-6" />
        </button>
      </div>
    </>
  )
}
