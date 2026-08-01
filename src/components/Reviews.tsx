import Container from './Container'
import iconStar from '../assets/icons/icon-star.svg'
import iconGoogle from '../assets/icons/icon-google.svg'
import olga from '../assets/img/review-olga.jpg'
import thomas from '../assets/img/review-thomas.jpg'
import eliot from '../assets/img/review-eliot.jpg'

const reviews = [
  {
    quote: '“A real sense of community, nurtured”',
    name: 'Olga',
    role: 'Weave Studios – Kai Tak',
    img: olga,
  },
  {
    quote: '“The facilities are superb. Clean, slick, bright.”',
    name: 'Thomas',
    role: 'Weave Studios – Olympic',
    img: thomas,
  },
  {
    quote: '“A real sense of community, nurtured”',
    name: 'Eliot',
    role: 'Weave Studios – Kai Tak',
    img: eliot,
  },
]

const body =
  'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.'

export default function Reviews() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-[32px]">Reviews</h2>
            <p className="mt-2 text-ink">What people says about Golobe facilities</p>
          </div>
          <button type="button" className="rounded px-4 py-2.5 text-sm font-medium text-ink">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="relative">
              <div className="absolute inset-0 translate-x-6 translate-y-5 rounded-[20px] bg-mint-tint" />
              <div className="relative rounded-[20px] bg-white p-6">
                <p className="font-display text-2xl font-bold leading-snug text-ink">
                  {review.quote}
                </p>
                <p className="mt-4 text-sm font-medium text-ink">{body}</p>
                <a href="#" className="mt-1 inline-block font-display text-sm font-bold text-ink">
                  View more
                </a>

                <div className="mt-7 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img key={i} src={iconStar} alt="" className="h-6 w-6" />
                  ))}
                </div>

                <div className="mt-4">
                  <p className="font-display text-sm font-bold text-ink">{review.name}</p>
                  <p className="text-xs font-medium text-ink">{review.role}</p>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <img src={iconGoogle} alt="" className="h-6 w-6" />
                  <p className="font-display text-xs font-bold text-ink">Google</p>
                </div>

                <img
                  src={review.img}
                  alt=""
                  className="mt-6 h-[200px] w-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
