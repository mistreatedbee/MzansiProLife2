import { LockKeyhole, Mail, Phone } from 'lucide-react'
import { useCallback } from 'react'

const supportEmail = 'mzansiprolifedevelopment@gmail.com'
const supportPhone = '0822322026'

export default function WebsiteLock() {
  const isAdmin = typeof window !== 'undefined' && localStorage.getItem('admin_authenticated') === 'true'

  const unlockFor20Days = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('site_unlocked_at', Date.now().toString())
    localStorage.setItem('site_paid', 'false')
    window.location.reload()
  }, [])

  const markAsPaid = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('site_paid', 'true')
    localStorage.removeItem('site_unlocked_at')
    window.location.reload()
  }, [])

  const lockNow = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.removeItem('site_paid')
    localStorage.removeItem('site_unlocked_at')
    window.location.reload()
  }, [])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 px-5 py-10 text-slate-900 sm:px-8">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" aria-hidden="true" />

      <section className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-green-950/30 ring-1 ring-white/20">
        <div className="h-2 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-600" />
        <div className="px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-green-100">
            <img
              src="/logo.jpeg"
              alt="Mzansi Prolife Development Institute NPC"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-700 ring-8 ring-green-50/70">
            <LockKeyhole className="h-7 w-7" aria-hidden="true" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Mzansi Prolife Development Institute NPC
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Website Temporarily Locked
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            This website is temporarily unavailable due to an outstanding payment.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
            Access to the website will be restored once the outstanding payment has been received and confirmed.
          </p>

          <div className="mx-auto mt-8 max-w-lg rounded-xl border border-green-100 bg-green-50/70 px-5 py-4 text-sm leading-6 text-green-900">
            If you have already made the payment, please allow some time for your payment to be confirmed.
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${supportEmail}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Support
            </a>
            <a
              href={`tel:${supportPhone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-green-200 px-6 py-3 text-sm font-semibold text-green-800 transition-colors hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {supportPhone}
            </a>
          </div>

          {isAdmin && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={unlockFor20Days}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Unlock 20 days
              </button>
              <button
                onClick={markAsPaid}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Mark as Paid
              </button>
              <button
                onClick={lockNow}
                className="inline-flex items-center gap-2 rounded-full border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Lock Now
              </button>
            </div>
          )}

          <p className="mt-8 text-xs text-slate-400">
            Support: {supportEmail}
          </p>
        </div>
      </section>
    </main>
  )
}
