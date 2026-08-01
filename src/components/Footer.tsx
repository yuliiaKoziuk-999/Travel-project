import Container from './Container'
import logoDark from '../assets/icons/logo-dark.svg'
import iconFacebook from '../assets/icons/icon-facebook.svg'
import iconTwitter from '../assets/icons/icon-twitter.svg'
import iconYoutube from '../assets/icons/icon-youtube.svg'
import iconInstagram from '../assets/icons/icon-instagram.svg'

const linkColumns = [
  { title: 'Our Destinations', links: ['Canada', 'Alaksa', 'France', 'Iceland'] },
  {
    title: 'Our Activities',
    links: ['Northern Lights', 'Cruising & sailing', 'Multi-activities', 'Kayaing'],
  },
  {
    title: 'Travel Blogs',
    links: ['Bali Travel Guide', 'Sri Lanks Travel Guide', 'Peru Travel Guide', 'Bali Travel Guide'],
  },
  { title: 'About Us', links: ['Our Story', 'Work with us'] },
  { title: 'Contact Us', links: ['Our Story', 'Work with us'] },
]

const socials = [
  { icon: iconFacebook, label: 'Facebook' },
  { icon: iconTwitter, label: 'Twitter' },
  { icon: iconYoutube, label: 'Youtube' },
  { icon: iconInstagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="mt-24 bg-mint pb-16 pt-28 sm:mt-32 sm:pt-40">
      <Container>
        <div className="relative -mt-40 mb-16 flex items-center justify-between gap-8 rounded-[20px] bg-mint-light p-8 sm:-mt-56 sm:p-12">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-[44px]">
              Subscribe Newsletter
            </h2>
            <div className="mt-8">
              <p className="font-display text-lg font-bold text-ink">The Travel</p>
              <p className="mt-2 text-base font-medium text-ink">
                Get inspired! Receive travel discounts, tips and behind the scenes stories.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-14 flex-1 rounded bg-white px-4 text-base text-ink-soft outline-none"
                />
                <button
                  type="submit"
                  className="h-14 shrink-0 rounded bg-ink px-6 text-sm font-semibold text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <span className="hidden shrink-0 text-[140px] leading-none lg:block" aria-hidden>
            📭
          </span>
        </div>

        <div className="flex flex-col gap-12 border-t border-ink/10 pt-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6">
            <img src={logoDark} alt="Golobe" className="h-9 w-auto" />
            <div className="flex gap-4">
              {socials.map((s) => (
                <a href="#" key={s.label} aria-label={s.label}>
                  <img src={s.icon} alt="" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <p className="font-display text-base font-bold text-ink">{col.title}</p>
                <ul className="mt-5 flex flex-col gap-4">
                  {col.links.map((link, i) => (
                    <li key={link + i}>
                      <a href="#" className="text-sm font-medium text-ink">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
