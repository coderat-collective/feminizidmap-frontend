export default function CaseDetails({ props }) {
  return (
    <div className="mb-5">
      <h3 className="mb-3">{props.crime_date} {props.address?.city}</h3>
      <p className="fs-5">{props.crime?.description_of_crimescene}</p>

      <details>
        <summary><b>Mehr Details</b></summary>
        <div className="mt-4">
          <p className="fs-5">Todesursache: <b>{props.crime?.cause_of_death?.label}</b></p>
          <p className="fs-5">Typ: <b>{props.crime?.type_of_feminicide?.label}</b></p>
          <p className="fs-5">Tatwaffe: <b>{props.crime?.weapon_details}</b></p>
          <p className="fs-5">Detaillierter Ort: <b>{props.crime?.location_details}</b></p>
          <p className="fs-5">Quellen:</p>
          <ul>
            {props.source.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank">{s.url}</a>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};
