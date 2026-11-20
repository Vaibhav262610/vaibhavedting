'use client';

import { useEffect, useRef, useState } from 'react';
import { featuredEdit, projectSections, videoSource } from './projects';

function ProjectCard({ project, grid, onWatch }) {
  const source = videoSource(project);
  const isAnime = grid === 'anime';
  const category = isAnime ? 'Anime style edit' : project.category;
  const previewClass = isAnime ? 'anime-preview' : grid === 'short' ? 'video-preview video-preview-short' : 'video-preview';
  const style = isAnime ? undefined : { '--video-poster': `url("${source.posterUrl}")` };

  return (
    <article className={isAnime ? 'anime-card reveal' : 'video-card reveal'}>
      <button
        className={previewClass}
        type="button"
        aria-label={`Watch ${project.playerTitle ?? project.title}`}
        onClick={() => onWatch(project)}
        style={style}
      >
        {isAnime && <img src={source.posterUrl} alt="" loading="lazy" />}
        <span className={isAnime ? 'anime-watch' : 'video-watch'}>{project.action ?? 'Watch edit'}</span>
      </button>
      <div className={isAnime ? 'anime-card-meta' : 'video-card-meta'}>
        <div>
          {category && <span>{category.toUpperCase()}</span>}
          <h4>{project.title}</h4>
        </div>
        <a href={source.watchUrl} target="_blank" rel="noopener noreferrer" aria-label={`${source.label} — ${project.title}`}>
          {source.label}
        </a>
      </div>
    </article>
  );
}

export default function WorkSection() {
  const dialog = useRef(null);
  const [project, setProject] = useState(null);
  const source = project && videoSource(project);
  const playerTitle = project?.playerTitle ?? project?.title ?? 'Portfolio video';

  function watch(project) {
    if (typeof dialog.current?.showModal !== 'function') {
      window.open(videoSource(project).watchUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setProject(project);
  }

  useEffect(() => {
    if (project && !dialog.current.open) dialog.current.showModal();
  }, [project]);

  return (
    <section className="work section-pad" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> PORTFOLIO</p>
            <h2 id="work-title">A place for every <em>format.</em></h2>
          </div>
          <p>Watch my work across YouTube, podcasts, shorts, promos, 3D intros, and anime edits.</p>
        </div>
        <nav className="portfolio-category-nav reveal" aria-label="Portfolio formats">
          {projectSections.map(section => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
        </nav>
        <div className="work-feature reveal">
          <button
            className="work-screen work-screen-video"
            type="button"
            aria-label="Watch featured anime edit 2"
            onClick={() => watch(featuredEdit)}
          >
            <img className="work-screen-poster" src={videoSource(featuredEdit).posterUrl} alt="" />
            <span className="work-screen-top"><span>VAIBHAV RAJPOOT / FEATURED EDIT</span><span>ANIME STYLE</span></span>
            <span className="work-screen-center"><span className="watch-chip">Watch featured edit</span></span>
            <span className="work-screen-bottom"><span>EDIT 02</span><span>VIDEO FROM GOOGLE DRIVE</span></span>
          </button>
          <div className="work-feature-copy">
            <span className="card-kicker">NOW PLAYING / ANIME EDITS</span>
            <h3>Timing makes the moment.</h3>
            <p>Explore five anime-style edits with different energy and moods. Select any video to watch the cut.</p>
            <a className="button button-primary" href="#anime-work">
              Browse all anime edits <span className="button-icon" aria-hidden="true">+</span>
            </a>
          </div>
        </div>

        {projectSections.map(({ id, title, grid, description, projects }) => (
          <section className="portfolio-category" id={id} aria-labelledby={`${id}-title`} key={id}>
            <div className="portfolio-category-head reveal">
              <div>
                {grid === 'anime' && <span className="category-kicker">REAL WORK / ANIME STYLE</span>}
                <h3 id={`${id}-title`}>{title}</h3>
              </div>
              {description && <p>{description}</p>}
            </div>
            <div className={`portfolio-video-grid ${grid}-grid`}>
              {projects.map(project => <ProjectCard key={project.id} project={project} grid={grid} onWatch={watch} />)}
            </div>
          </section>
        ))}
      </div>

      <dialog
        className="video-dialog"
        id="video-dialog"
        aria-labelledby="video-dialog-title"
        ref={dialog}
        onClose={() => setProject(null)}
        onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
      >
        <div className="video-dialog-head">
          <div><span>PORTFOLIO VIDEO</span><h2 id="video-dialog-title">{playerTitle}</h2></div>
          <button className="video-dialog-close" type="button" aria-label="Close video" onClick={() => dialog.current.close()}>
            Close
          </button>
        </div>
        {source && (
          <>
            <div className="video-dialog-player">
              <iframe
                title={`Video player: ${playerTitle}`}
                src={source.embedUrl}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p><a href={source.watchUrl} target="_blank" rel="noopener noreferrer">{source.label}</a></p>
          </>
        )}
      </dialog>
    </section>
  );
}
