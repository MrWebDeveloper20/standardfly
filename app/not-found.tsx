import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='alib'> با عرض پوزش صفحه مورد نظر یافت نشد</h2>
      <p className='alib my-3'>  آژانس خدمات مسافرت و گردشگری روژانو  </p>
      <Image className='rounded-lg my-3' src={'/logo/logo.jpg'} alt='' width={400} height={400}/>
      <Link href="/" className='alib text-blue-500'> بازگشت به صفحه نخست سایت </Link>
    </div>
  )
}
