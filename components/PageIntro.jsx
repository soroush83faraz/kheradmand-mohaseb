import Reveal from './Reveal';

export default function PageIntro({ title, lead }) {
  return (
    <div className="page-intro">
      <div className="wrap">
        <Reveal>
          <h1>{title}</h1>
          {lead ? <p className="lead">{lead}</p> : null}
        </Reveal>
      </div>
    </div>
  );
}
