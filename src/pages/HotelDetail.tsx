import { Link, useParams } from 'react-router-dom'
import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import BookingBreadcrumb from '../components/BookingBreadcrumb'
import iconHeart from '../assets/icons/icon-heart.svg'
import iconShare from '../assets/icons/icon-share.svg'
import iconCheckbox from '../assets/icons/icon-checkbox.svg'
import iconStopwatch from '../assets/icons/icon-stopwatch.svg'
import iconBed from '../assets/icons/icon-bed.svg'
import iconWifi from '../assets/icons/icon-wifi.svg'
import iconFastfood from '../assets/icons/icon-fastfood.svg'
import iconLocation from '../assets/icons/icon-location.svg'
import heroImg from '../assets/img/destination-istanbul.jpg'
import gallery1 from '../assets/img/gallery-1.jpg'
import gallery2 from '../assets/img/gallery-2.jpg'
import gallery3 from '../assets/img/gallery-3.jpg'
import gallery4 from '../assets/img/gallery-4.jpg'

const galleryPhotos = [
  gallery1, gallery2, gallery3, gallery4, gallery1, gallery4, gallery2, gallery3, gallery1,
]

const amenities = [
  { icon: iconBed, label: 'Room' },
  { icon: iconWifi, label: 'Wifi' },
  { icon: iconStopwatch, label: 'Duration' },
  { icon: iconFastfood, label: 'Breakfast' },
]

function RoomOption({ name, bed, price }: { name: string; bed: string; price: string }) {
  return (
    <div className="rounded-xl bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-ink">{name}</h3>
        <p className="text-xl font-medium text-ink">{price} / night</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-4 rounded-lg border border-mint/50 bg-white p-4">
          <img src={iconBed} alt="" className="h-11 w-11 object-contain" />
          <div>
            <p className="text-2xl font-semibold text-ink">{bed}</p>
            <p className="text-sm font-medium text-ink">2 Guests</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-around gap-4 rounded-xl bg-white py-5">
          {amenities.map((a, i) => (
            <div key={a.label} className={`flex items-center ${i > 0 ? 'border-l border-[#D7E2EE] pl-4' : ''}`}>
              <img src={a.icon} alt={a.label} className="h-6 w-6" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold text-ink">3:00 pm</p>
          <p className="text-base font-medium text-ink">Check In</p>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2 px-6">
          <span className="h-px flex-1 bg-black" />
          <img src={iconBed} alt="" className="h-12 w-12" />
          <span className="h-px flex-1 bg-black" />
        </div>

        <div className="text-right">
          <p className="text-2xl font-semibold text-ink">11:00 am</p>
          <p className="text-base font-medium text-ink">Check Out</p>
        </div>
      </div>
    </div>
  )
}

export default function HotelDetail() {
  const { id = '1' } = useParams()

  return (
    <>
      <LoggedInHeader />

      <Container>
        <BookingBreadcrumb />

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-2xl font-bold text-ink">CVK Park Bosphorus Hotel</h1>
            <div className="mt-4 flex items-center gap-2">
              <img src={iconLocation} alt="" className="h-[18px] w-[18px]" />
              <p className="text-sm font-medium text-ink">
                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-8 w-10 items-center justify-center rounded border border-mint text-xs font-medium text-ink">
                4.2
              </span>
              <span className="text-xs font-medium text-ink">Very Good 54 reviews</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <p className="text-4xl font-bold text-[#FF8682]">$104</p>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Save to favourites"
                className="flex h-12 w-12 items-center justify-center rounded border border-mint"
              >
                <img src={iconHeart} alt="" className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Share"
                className="flex h-12 w-12 items-center justify-center rounded border border-mint"
              >
                <img src={iconShare} alt="" className="h-5 w-5" />
              </button>
              <Link
                to={`/hotels/${id}/booking`}
                className="flex items-center rounded bg-mint px-8 text-sm font-semibold text-ink"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>

        <img
          src={heroImg}
          alt="CVK Park Bosphorus Hotel"
          className="mt-8 h-[280px] w-full rounded-xl object-cover sm:h-[395px]"
        />

        <div className="mt-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-ink">Room Types</h2>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <span className="flex h-6 w-6 items-center justify-center rounded border-2 border-mint bg-mint text-white">
                  ✓
                </span>
                Standard
              </label>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <img src={iconCheckbox} alt="" className="h-6 w-6" />
                Deluxe
              </label>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <img src={iconCheckbox} alt="" className="h-6 w-6" />
                Suite
              </label>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
            {galleryPhotos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt=""
                className="aspect-square w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-lg bg-mint-tint p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-ink">Hotel Policies</h2>
          <div className="mt-6 flex flex-wrap gap-x-16 gap-y-4">
            <div className="flex items-center gap-3">
              <img src={iconStopwatch} alt="" className="h-6 w-6" />
              <p className="text-base font-medium text-ink">
                Daily deep cleaning and sanitizing of guest rooms.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={iconStopwatch} alt="" className="h-6 w-6" />
              <p className="text-base font-medium text-ink">
                Free cancellation up to 24 hours before check-in.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 pb-16">
          <RoomOption name="Standard Room" bed="1 Queen Bed" price="$104" />
          <RoomOption name="Deluxe Room" bed="1 King Bed" price="$156" />
        </div>
      </Container>

      <Footer />
    </>
  )
}
