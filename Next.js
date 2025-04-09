import Head from 'next/head';

export default function ChinaTripItinerary() {
  return (
    <>
      <Head>
        <title>10-Day China Family Itinerary</title>
        <meta name="description" content="A thoughtful family journey across China, designed with comfort and culture in mind." />
      </Head>
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">10-Day China Family Itinerary</h1>
          <p className="text-lg text-gray-600">A scenic and thoughtful journey across China with family and an elderly parent</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Trip Overview</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Travelers: Family of three (father age 70, two adult children in their 30s)</li>
            <li>Duration: 10 days</li>
            <li>Route: Chengdu → Chongqing → Shanghai → Suzhou → Hangzhou</li>
            <li>Travel Style: Balanced pace with consideration for elderly traveler</li>
            <li>Best Seasons: Spring (April–May) or Autumn (September–October)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Pre-Trip Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Visa & Documents</h3>
              <ul className="list-disc list-inside">
                <li>Apply for Chinese tourist visa ~1 month prior</li>
                <li>Bring passport, photo, and travel proof</li>
                <li>Visa-free transit available for select nationalities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Packing & Health</h3>
              <ul className="list-disc list-inside">
                <li>Walking shoes, layers, first aid kit, SIM card</li>
                <li>Bring prescriptions in original packaging</li>
                <li>Consider travel insurance and consult your doctor</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Day-by-Day Highlights</h2>
          <div className="space-y-4">
            {[
              ["Day 1: Chengdu - Arrival & Rest", "Relax, adjust to time zone, dinner at Chen Mapo Tofu 🌶️"],
              ["Day 2: Chengdu - Panda Base 🐼", "Visit in the morning, light walking, rest in the afternoon, explore Jinli Street in the evening"],
              ["Day 3: Chengdu - Culture & Tea", "People's Park, tea house lunch, Wenshu Monastery, optional Sichuan opera"],
              ["Day 4: Chengdu → Chongqing", "High-speed train, check in, Three Gorges Museum, riverfront dinner"],
              ["Day 5: Chongqing - Hongya & Ciqikou", "Minimal walking, explore ancient towns and eat local noodles 🍜"],
              ["Day 6: Chongqing → Shanghai", "Flight, check-in, The Bund evening walk or cruise 🌆"],
              ["Day 7: Shanghai - Garden & Museum", "Yu Garden, xiaolongbao lunch, Shanghai Museum, Xintiandi stroll"],
              ["Day 8: Shanghai → Suzhou", "Train to Suzhou, Humble Administrator’s Garden, canal-side dinner"],
              ["Day 9: Suzhou → Hangzhou", "Master of the Nets Garden, Suzhou noodles, high-speed train to Hangzhou"],
              ["Day 10: Hangzhou - West Lake Farewell", "Boat cruise, Lingyin Temple (optional), dinner with lake view"]
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-xl font-medium">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-10">
          Built for comfort, connection, and cross-generational joy. 🇨🇳🧳
        </footer>
      </div>
    </>
  );
}
