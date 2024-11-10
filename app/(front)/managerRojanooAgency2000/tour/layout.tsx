import SlickBanner from '@/components/slick/slickBanner'

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex-grow w-full content-center justify-items-center mx-auto px-4 text-center">
      {children}
    </main>
  )
}
