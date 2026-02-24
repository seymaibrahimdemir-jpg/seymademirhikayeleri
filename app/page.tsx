export default function Home() {
  const seasons = [
    {
      name: "İlkbahar",
      description: "Yeniden doğuş, umut ve filizlenen aşklar...",
      color: "bg-green-200",
    },
    {
      name: "Yaz",
      description: "Tutku, cesaret ve yakıcı duygular...",
      color: "bg-yellow-200",
    },
    {
      name: "Sonbahar",
      description: "Hüzün, vedalar ve derinleşen kalpler...",
      color: "bg-orange-200",
    },
    {
      name: "Kış",
      description: "Sessizlik, sabır ve kar altında saklanan gerçekler...",
      color: "bg-blue-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          SeymaDemirHikayeleri
        </h1>
        <p className="text-lg text-gray-700">
          Mevsimlerin ruhunda yazılmış hikayeler
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {seasons.map((season) => (
          <div
            key={season.name}
            className={`${season.color} rounded-2xl p-8 shadow-lg`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {season.name}
            </h2>
            <p className="mb-4">{season.description}</p>
            <button className="bg-black text-white px-4 py-2 rounded-xl">
              Hikayeleri Gör
            </button>
          </div>
        ))}
      </div>

      <footer className="text-center mt-16 text-gray-600">
        © {new Date().getFullYear()} Şeyma Demir
      </footer>
    </div>
  );
}