import Map from "./map";
import { Row, Col } from "react-bootstrap";
import "./page.css";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cases?populate=deep&pagination[pageSize]=100000`);
  if (!res.ok) { throw new Error('Failed to fetch data') }
  return res.json()
}

const CaseCard = ({ c }) => (
  <Col md={6}>
    <div className="case-card p-3 my-3 d-flex flex-column align-items-center">
      <div>{c.crime_date}</div>
      <h2>{c.address.city}</h2>
    </div>
  </Col>
)

export default async function Page() {
  const data = await getData();

  return <main>
    <div className="mb-3">
      <Map cases={data.data} />
    </div>

    <Row>
      {data.data.map((c) => (
        <CaseCard key={c.id} c={c} />
      ))}
    </Row>
  </main>
}
