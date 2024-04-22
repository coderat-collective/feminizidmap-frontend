import "./page.css";
import CasesList from "./CasesList";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cases?populate=deep&pagination[pageSize]=200`);
  if (!res.ok) { throw new Error('Failed to fetch data') }
  return res.json()
}

export default async function Page() {
  const data = await getData();

  return <main>
    <CasesList cases={data} />
  </main>
}
