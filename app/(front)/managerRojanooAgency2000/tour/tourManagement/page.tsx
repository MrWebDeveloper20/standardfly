import Image from 'next/image'
// import Search from './search/search';
// import SearchResult from './search/searchResult';
import Link from 'next/link'

export default async function CountryPage({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const query = searchParams?.query || ''

  return (
    <div className="hotels  w-full flex flex-row-reverse mx-auto">
      <div className="left  w-4/5 flex flex-col h-auto">
        <div className="title items-center mx-5 my-3 flex flex-row-reverse justify-between">
          {/* <div>
            <Link
              href={'./'}
              className=" fixed lg:right-[300px] top-20 bg-red-500 p-2 rounded-full"
            >
              <Image
                src={'/icon/return.svg'}
                width={25}
                height={25}
                alt=""
                title="اطلاعات پایه  "
              />
            </Link>
          </div> */}

          {/* <h1 className="text-2xl text-orange-500 mb-2 alib text-center">
           تور ها
          </h1> */}
          <Link href={'/tour/tourManagement/new'}>
            <Image
              title="افزودن"
              alt=""
              src="/icon/plusGreen.svg"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* <Search />

        <SearchResult query={query} /> */}
      </div>
    </div>
  )
}
