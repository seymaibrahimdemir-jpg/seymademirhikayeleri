import Link from "next/link"

export default function BookCard({ book }: any) {
  return (
    <Link href={`/kitap/${book.slug}`}>
      <div className="p-6 bg-orange-200 rounded-xl shadow-lg hover:bg-orange-300 transition cursor-pointer">
        <h2 className="text-2xl font-bold text-orange-900">
          {book.title}
        </h2>
      </div>
    </Link>
  )
}
