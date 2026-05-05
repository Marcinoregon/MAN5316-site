import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section flex flex-col items-center text-center py-24">
      <p className="text-6xl font-serif font-semibold text-teal-700 mb-4">404</p>
      <h1 className="font-serif text-2xl font-semibold text-slate-900 mb-3">
        Page not found
      </h1>
      <p className="text-slate-500 text-sm mb-8 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Return home
      </Link>
    </div>
  )
}
