import Map from "./map";
import "./page.css";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cases?populate=deep&pagination[pageSize]=20000`);
  if (!res.ok) { throw new Error('Failed to fetch data') }
  return res.json()
}

export default async function Page() {
  const data = await getData();

  return <main>
    <div className="mb-3">
      <Map cases={data.data} />
    </div>
  </main>
}
