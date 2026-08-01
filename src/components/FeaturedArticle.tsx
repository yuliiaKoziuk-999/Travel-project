import Container from './Container'
import gallery1 from '../assets/img/gallery-1.jpg'
import gallery2 from '../assets/img/gallery-2.jpg'
import gallery3 from '../assets/img/gallery-3.jpg'
import gallery4 from '../assets/img/gallery-4.jpg'

const gallery = [gallery1, gallery2, gallery3, gallery4]

export default function FeaturedArticle() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-[32px]">Fall into travel</h2>
            <p className="mt-2 text-ink">
              Going somewhere to celebrate this season? Whether you're going home or somewhere to
              roam, we've got the travel tools to get you to your destination.
            </p>
          </div>
          <button type="button" className="rounded px-4 py-2.5 text-sm font-medium text-ink">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,552fr)_minmax(0,656fr)]">
          <div className="flex flex-col rounded-[20px] bg-mint p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-3xl font-bold text-ink sm:text-[40px]">
                Backpacking Sri Lanka
              </h3>
              <div className="shrink-0 rounded-lg bg-white px-4 py-3 text-center">
                <p className="font-display text-xs text-ink">From</p>
                <p className="text-xl font-semibold text-ink">$700</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-ink">
              Traveling is a unique experience as it's the best way to unplug from the pushes and
              pulls of daily life. It helps us to forget about our problems, frustrations, and
              fears at home. During our journey, we experience life in different ways. We explore
              new places, cultures, cuisines, traditions, and ways of living.
            </p>
            <button
              type="button"
              className="mt-auto flex h-12 w-full items-center justify-center rounded bg-white text-sm font-medium text-ink"
            >
              Book Flight
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-[200px] w-full rounded-xl border-2 border-mint object-cover"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
