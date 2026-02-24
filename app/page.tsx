import BookCard from "@/components/BookCard"

const books = [
  { title: "Toprak Kokusu", slug: "toprak-kokusu" },
  { title: "Sonbahar Rüzgarı", slug: "sonbahar-ruzgari" }
]

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">
        Şeyma Demir Hikayeleri 🌿
      </h1>

      <div className="grid gap-6">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </div>
  )
}
