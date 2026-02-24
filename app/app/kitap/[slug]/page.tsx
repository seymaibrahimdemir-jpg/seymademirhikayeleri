interface Props {
  params: { slug: string }
}

export default function BookDetail({ params }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">
        {params.slug.replace("-", " ")}
      </h1>

      <div className="bg-orange-100 p-6 rounded-xl shadow-md text-orange-900">
        <p>
          Bu sayfaya yaklaşık 30 bölüm ekleyebilirsin.
          Her bölümü burada alt alta yazabilirsin.
        </p>
      </div>
    </div>
  )
}
