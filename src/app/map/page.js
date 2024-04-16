import dynamic from 'next/dynamic';
import "./page.css";

// this is necessary since leaflet is not server-side compatible
const Map = dynamic(() => import("./map.js"), { ssr: false })

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cases?populate=deep&pagination[pageSize]=100`);
  if (!res.ok) { throw new Error('Failed to fetch data') }
  return res.json()
}

export default async function Page() {
  const data = await getData();

  return <main>
    <div className="mb-3">
      <Map cases={data.data} />
    </div>

    {data.data.map((c) => (
      <div key={c.id}>
        <h1 className="purple">{c.identifier}</h1>
      </div>
    ))}
  </main>
}
