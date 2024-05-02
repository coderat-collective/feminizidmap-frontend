"use client"

import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export default function CasesList({ cases }) {
  const [activeCase, setActiveCase] = useState(null);

  const CaseCard = ({ c }) => {
    console.log(c);
    const activeClass = activeCase && activeCase.id === c.id ? "active" : "";

    return <div onClick={() => setActiveCase(c)}>
      <div className={"case-card p-3 my-3 d-flex flex-column align-items-center justify-content-center " + activeClass}>
        <div>{c.crime_date}</div>
        <h2 className="fs-3">{c.address.city}</h2>
      </div>
    </div>
  }

  return <Row>
    <Col xs={12} md={5} style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 350px)' }}>
      {cases.data.map((c) => (
        <CaseCard key={c.id} c={c} />
      ))}
    </Col>
    <Col xs={12} md={7}>
      {activeCase && <div className="mt-3 ms-md-4">
        <h2>{activeCase.address.city}</h2>
        <p className="fs-4">{activeCase.crime_date}</p>
        <p className="fs-4">{activeCase.crime?.description_of_crimescene}</p>
      </div>}
    </Col>
  </Row>
}
