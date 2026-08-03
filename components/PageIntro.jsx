import Reveal from './Reveal';

export default function PageIntro({ eyebrow, title, lead }) {
  return (
    <div className="page-intro">
      <div className="wrap">
        <Reveal>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {lead ? <p className="lead">{lead}</p> : null}
        </Reveal>
      </div>
    </div>
  );
}
