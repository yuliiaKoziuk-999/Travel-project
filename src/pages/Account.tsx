import LoggedInHeader from '../components/LoggedInHeader'
import Container from '../components/Container'
import Footer from '../components/Footer'
import AccountProfileHeader from '../components/AccountProfileHeader'
import iconEdit from '../assets/icons/icon-edit.svg'
import iconAddCircle from '../assets/icons/icon-add-circle.svg'

const fields = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john.doe@gmail.com', extraAction: 'Add another email' },
  { label: 'Password', value: '************' },
  { label: 'Phone number', value: '+1 000-000-0000' },
  { label: 'Address', value: 'St 32 main downtown, Los Angeles, California, USA' },
  { label: 'Date of birth', value: '01-01-1992' },
]

export default function Account() {
  return (
    <>
      <LoggedInHeader />

      <Container>
        <div className="py-6">
          <AccountProfileHeader active="/account" />

          <div className="mt-10 pb-16">
            <h1 className="font-display text-[32px] font-bold text-ink">Account</h1>

            <div className="mt-6 flex flex-col divide-y divide-[#D7E2EE] rounded-2xl bg-white px-8">
              {fields.map((field) => (
                <div key={field.label} className="flex flex-wrap items-center justify-between gap-4 py-6">
                  <div>
                    <p className="text-base text-ink">{field.label}</p>
                    <p className="mt-1 text-xl font-semibold text-ink">{field.value}</p>
                  </div>
                  <div className="flex gap-4">
                    {field.extraAction && (
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded border border-mint px-6 py-3.5 text-sm font-medium text-ink"
                      >
                        <img src={iconAddCircle} alt="" className="h-4 w-4" />
                        {field.extraAction}
                      </button>
                    )}
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded border border-mint px-6 py-3.5 text-sm font-medium text-ink"
                    >
                      <img src={iconEdit} alt="" className="h-4 w-4" />
                      Change
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
